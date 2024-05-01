import storage from "methods/storage";
import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";
import { useTranslation } from "react-i18next";
import bgImg from "../../../../assets/images/IPB.png";
import { Box, Grid, Typography } from "@mui/material";
import ProjectInformation from "./components/ProjectInformation";
import MapAndImagesPart from "./components/MapAndImagesPart";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "methods/api";
import Loader from "pages/Infrastructure_projects/components/Loading/Loading";

type showProjctInformation = {
  id: number;
  name: string;
  Contract_status: number;
  amount: string;
  branchName: string;
  supportNumber: string;
  OwnerName: string;
  contractorName: string;
  numberOfPieces: number;
  area: number;
  bannerImg: string;
  location: string;
  cardId?: number;
};
const ShowProject = () => {
  // declare our state
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<showProjctInformation>();
  const [mapStr, setMapStr] = useState("");
  const [subImagesUrls, setSubImagesUrls] = useState<string[]>([]);
  let { projectId } = useParams();
  const [polygonCoordinates, setPolygonCoordinates] = useState<
    { lat: number; lng: number }[]
  >([]);

  //TODO::fetch project data
  useEffect(() => {
    setLoading(true);
    axios
      .get(api(`employee/contract-details/${projectId}`))
      .then((data) => {
        console.log("DATAAAAAAAAA::", data?.data?.data);
        setProject({
          id: +data?.data?.data?.id,
          name: data?.data?.data?.details,
          Contract_status: +data?.data?.data?.Contract_status,
          branchName: data?.data?.data?.engineering_office,
          supportNumber: data?.data?.data?.client?.phone,
          OwnerName: data?.data?.data?.owner,
          contractorName: "contractorName",
          area: data?.data?.data?.contract_details?.area,
          location: data?.data?.data?.contract_details?.location,
          numberOfPieces: data?.data?.data?.contract_details?.number_parts,
          bannerImg: data?.data?.data?.contract_details?.media?.filter(
            (ele: { collection_name: string }) =>
              ele?.collection_name == "banner"
          )[0]?.original_url,
          amount: "",
          cardId: data?.data?.data?.client?.card_id,
        });

        setMapStr(data?.data?.data?.contract_details?.map);
        let urls = [],
          n = data?.data?.data?.contract_details?.media?.length;

        for (let i = 0; i < n; i++) {
          if (
            data?.data?.data?.contract_details?.media[i].collection_name ==
            "sub_images"
          )
            urls.push(
              data?.data?.data?.contract_details?.media[i]?.original_url
            );
        }
        setSubImagesUrls(urls);
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (mapStr) {
      let validChars = ".0123456789";
      let _mapStr = mapStr?.slice(3, -3);
      let polygonCoordinatesArr = [];
      let n = _mapStr?.length,
        coordinate = "",
        lat = "",
        long = "",
        _key = true;

      for (let i = 0; i < n; i++) {
        if (validChars.indexOf(_mapStr[i]) != -1) {
          coordinate += _mapStr[i];
        } else {
          if (lat.length == 0) {
            lat = coordinate;
            coordinate = "";
          }
          if (lat.length > 0 && long.length == 0) {
            long = coordinate;
            coordinate = "";
          }
          if (lat.length > 0 && long.length > 0) {
            polygonCoordinatesArr.push({ lat: +lat, lng: +long });
            lat = "";
            long = "";
          }
        }
      }

      setPolygonCoordinates(polygonCoordinatesArr);
    }
  }, [mapStr]);

  if (loading)
    return <Loader h="95vh" title="جاري تحميل بيانات مشروع البنية التحتية.." />;

  return (
    <>
      {/* banner image */}
      <div
        style={{
          width: "100%",
          height: "495px",
          backgroundImage: `url(${project?.bannerImg ?? bgImg})`,
          backgroundSize: "100% 100%",
          padding: 0,
          marginBottom: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          sx={{ fontWeight: 800 }}
          fontSize={"2.88rem"}
        >
          {project?.name}
        </Typography>
      </div>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          margin: "3rem auto",
        }}
      >
        <Grid
          container
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Grid item xs={12} md={6}>
            <ProjectInformation project={project} />
          </Grid>
          <Grid item xs={12} md={6}>
            <MapAndImagesPart
              id={project?.id}
              cardId={project?.cardId}
              mapStr={mapStr}
              polygonCoordinates={polygonCoordinates}
              urls={subImagesUrls}
              projectName={project?.name}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ShowProject;
