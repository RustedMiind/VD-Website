import {
  Backdrop,
  Button,
  Chip,
  ChipProps,
  CircularProgress,
  IconButton,
  Paper,
  Skeleton,
  Stack,
} from "@mui/material";
import GoogleMapReact from "google-map-react";
import engIcon from "../../../../../assets/images/icons/engineer2.png";
import underCon from "../../../../../assets/images/icons/under-con1.png";
import pinIcon from "../../../../../assets/images/icons/radio 1.png";
import { Tooltip } from "react-tooltip";
import { ImgHTMLAttributes, useState } from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessIcon from "@mui/icons-material/Business";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import MapSearchInput from "components/MapsSearchInput";
import {
  Contractor,
  MapReportContractor,
} from "pages/Infrastructure_projects/types/WorkInstructionsReport";
import { Employee } from "types/Employee";
import GoogleMapApiKey from "contstants/GoogleMapApiKey";

export enum MapReportTypes {
  CONTRACTOR = 1,
  EMPLOYEE = 2,
}

const CustomChip = (props: ChipProps) => (
  <Chip
    component={Paper}
    sx={{ bgcolor: "Background" }}
    size="small"
    label="مهندس"
    icon={<EngineeringIcon />}
    {...props}
  />
);

// Should be translate(-50%, -50%) in ltr layout
const imageContainerStyle = {
  position: "absolute",
  transform: "translate(50%, -50%)",
} as const;

const IconImage = ({
  src,
  ...props
}: { src: string } & ImgHTMLAttributes<HTMLImageElement>) => (
  <div style={imageContainerStyle}>
    <img
      src={src}
      alt="Pin Marker"
      style={{ width: 32, height: 32, objectFit: "contain" }}
      {...props}
    />
  </div>
);
const Marker = (
  props: ImgHTMLAttributes<HTMLImageElement> & {
    lat: number;
    lng: number;
    title: string;
    toolTipId: string;
  }
) => (
  <IconImage
    data-tooltip-id={props.toolTipId}
    data-tooltip-content={props.title}
    {...props}
    src={props.src || engIcon}
  />
);

const allPoints = [
  {
    id: "65ecf1f81c6528e53fadd48a",
    typeId: 1,
    about:
      "Aliqua laborum cillum culpa dolore consectetur qui anim ipsum eiusmod. Cupidatat tempor aute mollit minim cillum consequat do quis deserunt laboris. Incididunt sunt culpa adipisicing ut mollit ut consectetur id anim id ut id do. Irure nostrud aliqua tempor nulla minim elit incididunt culpa sint deserunt ad.\r\n",
    lat: 5.108786,
    long: 21.13967,
  },
  {
    id: "65ecf1f80679da146af232c2",
    typeId: 4,
    about:
      "Excepteur amet consectetur amet commodo sit dolor ea officia Lorem non deserunt eiusmod amet. Officia dolor consectetur aliquip quis quis ut exercitation laboris velit mollit fugiat. Ex irure in nostrud id irure laboris ipsum culpa occaecat consequat Lorem nostrud exercitation.\r\n",
    lat: 67.780627,
    long: 92.117758,
  },
  {
    id: "65ecf1f810f2a233aa8e7e56",
    typeId: 2,
    about:
      "Anim laboris sunt quis nulla labore aute proident excepteur officia exercitation aliquip consectetur exercitation commodo. Quis mollit proident ex consequat nostrud. Nisi pariatur fugiat commodo adipisicing nostrud cillum ex. Elit consectetur eu occaecat est amet Lorem eu.\r\n",
    lat: 5.427834,
    long: 115.117932,
  },
  {
    id: "65ecf1f84e46e6d8835115b9",
    typeId: 4,
    about:
      "Qui tempor mollit sit consequat in veniam fugiat aliquip veniam magna occaecat et exercitation. Aliqua mollit sit fugiat consequat veniam non pariatur enim nostrud. Eiusmod esse consectetur eu incididunt. Laborum ad adipisicing aliqua aliqua laboris id magna adipisicing duis nisi ad sunt. Consequat veniam tempor reprehenderit sit adipisicing Lorem ut velit dolore esse voluptate irure.\r\n",
    lat: 7.758963,
    long: -26.984291,
  },
  {
    id: "65ecf1f873a131645a3805d8",
    typeId: 2,
    about:
      "Culpa ex magna est eu eiusmod reprehenderit. Exercitation sunt tempor aliqua deserunt minim aliqua pariatur qui excepteur ad pariatur dolor officia. In ea aliquip excepteur amet enim. Ullamco qui dolor do minim eiusmod sunt eu.\r\n",
    lat: 38.400998,
    long: 86.616571,
  },
  {
    id: "65ecf1f898bf4b29872b3530",
    typeId: 1,
    about:
      "Quis veniam minim aute proident dolor ex irure ea amet nostrud cupidatat cillum eu culpa. Esse ea mollit qui mollit Lorem cupidatat et enim sit laborum proident. Nulla fugiat et aute adipisicing.\r\n",
    lat: -69.222129,
    long: -70.300084,
  },
  {
    id: "65ecf1f8eccefc06ff3ad3c3",
    typeId: 4,
    about:
      "Eiusmod nisi deserunt fugiat do mollit anim commodo excepteur cillum consectetur est aliqua. Aliqua eiusmod anim irure excepteur reprehenderit deserunt aliqua non nulla consequat fugiat. Minim eiusmod Lorem officia laboris labore amet aute quis veniam mollit dolor et consequat duis. Commodo ex esse sunt proident.\r\n",
    lat: 58.054483,
    long: 94.699224,
  },
  {
    id: "65ecf1f835172f6f0eb41253",
    typeId: 1,
    about:
      "Magna cillum exercitation anim ea occaecat tempor nisi laborum consectetur incididunt minim. Mollit esse dolor ad veniam dolore qui sint. Minim ut magna exercitation quis elit fugiat.\r\n",
    lat: 16.21708,
    long: -154.178526,
  },
  {
    id: "65ecf1f8f63478ef1c342bb5",
    typeId: 1,
    about:
      "Duis duis ut eu excepteur aliqua nisi ad laboris. Ad culpa ipsum tempor duis consequat eu magna nostrud ea qui nostrud magna elit non. Sunt cupidatat consequat consequat labore voluptate excepteur reprehenderit minim consectetur eiusmod. Elit pariatur in cillum pariatur dolor esse. Lorem tempor esse sunt esse reprehenderit reprehenderit. Mollit non non labore nisi cillum cillum. Enim exercitation pariatur pariatur cillum eiusmod veniam anim nisi elit incididunt sit.\r\n",
    lat: 64.648385,
    long: 147.827385,
  },
  {
    id: "65ecf1f85fb13e713290da4b",
    typeId: 4,
    about:
      "Laborum aliquip ea non Lorem velit deserunt culpa reprehenderit nostrud nostrud do. Proident velit cillum ex do exercitation labore exercitation do mollit duis nostrud ad. Id officia eiusmod dolore aliqua tempor voluptate laborum et cillum enim excepteur ipsum ad est. Esse qui ad quis exercitation. Minim et anim enim exercitation id cupidatat eu consequat do elit dolore. Do enim laborum dolore sunt eu in reprehenderit officia et aliquip consequat qui laborum. Lorem exercitation sunt irure enim velit elit anim.\r\n",
    lat: 67.801238,
    long: -119.534005,
  },
  {
    id: "65ecf1f80760036682d2d5b9",
    typeId: 1,
    about:
      "Ipsum excepteur sit cupidatat ullamco consectetur est incididunt. Fugiat occaecat velit minim occaecat ullamco sint est. Ipsum dolor mollit cupidatat magna mollit anim non est id. Ullamco ea culpa id qui officia ea. Consectetur minim laboris laboris id culpa nostrud tempor aliqua consequat ipsum reprehenderit irure dolor culpa. Occaecat nisi cillum qui sit excepteur nostrud non. Pariatur occaecat nisi occaecat ex cillum laboris ex esse est mollit ex excepteur Lorem.\r\n",
    lat: 49.078077,
    long: -56.283816,
  },
  {
    id: "65ecf1f8643504f9604b025a",
    typeId: 3,
    about:
      "Tempor exercitation esse in aute deserunt. Ea cillum occaecat esse nulla. Qui eu exercitation est aliqua sunt et et non incididunt et consequat. Proident ullamco esse et culpa quis dolore velit aliqua. Officia nulla sint magna culpa excepteur aliquip ea eiusmod. Sunt Lorem cupidatat in magna eu et. Et nostrud ad laborum labore ea.\r\n",
    lat: -4.636603,
    long: -29.818596,
  },
  {
    id: "65ecf1f827bc7926aa66b435",
    typeId: 1,
    about:
      "Lorem incididunt reprehenderit ipsum ea voluptate laboris nisi. Aliquip minim cillum aliqua quis. Non aliquip occaecat ad ad irure anim excepteur Lorem consequat mollit veniam quis reprehenderit adipisicing. Et Lorem commodo et voluptate occaecat quis sunt nisi minim ut cupidatat dolor.\r\n",
    lat: 84.551467,
    long: 3.55456,
  },
  {
    id: "65ecf1f8e4e63fbe08ae383e",
    typeId: 2,
    about:
      "Lorem tempor amet et cupidatat irure dolor labore esse culpa irure. Cupidatat quis anim eu minim sint. In voluptate aliquip tempor et nostrud.\r\n",
    lat: 10.04975,
    long: 93.152302,
  },
  {
    id: "65ecf1f854d1a9a2060fdfad",
    typeId: 1,
    about:
      "Sit Lorem tempor commodo nisi non cillum tempor ullamco ipsum. Et ullamco non exercitation nostrud culpa labore ut occaecat. Excepteur fugiat proident enim occaecat aliqua dolore aliquip velit tempor proident labore. Ad pariatur exercitation occaecat sint. Cupidatat sint proident occaecat consequat. Id veniam sunt nisi irure non et aute ex nostrud velit id ex in. Qui laboris ex id anim incididunt laborum ipsum ex est deserunt.\r\n",
    lat: -35.824548,
    long: 2.572559,
  },
  {
    id: "65ecf1f8d5bdea483d82ac25",
    typeId: 2,
    about:
      "Lorem nulla ad eu sint sunt adipisicing nisi cillum commodo sit magna est veniam. Laborum excepteur Lorem ea laborum ullamco irure dolor sit do. Enim excepteur ipsum et elit aliquip laborum irure. Qui ad aliquip non Lorem nostrud aliqua anim exercitation sit do. Aliqua dolore ipsum eu laboris laboris dolor nulla proident proident do occaecat in. Et pariatur tempor officia deserunt deserunt aute eiusmod adipisicing aute ut excepteur elit.\r\n",
    lat: -55.814302,
    long: 165.571114,
  },
  {
    id: "65ecf1f801c860eabad17fb6",
    typeId: 3,
    about:
      "Pariatur laboris id ea ullamco nisi ex commodo laborum sunt consequat culpa officia. Velit voluptate aliqua commodo mollit dolore nulla in irure sit culpa voluptate non. Anim Lorem occaecat ad ad consectetur cillum.\r\n",
    lat: -68.664313,
    long: -87.034545,
  },
  {
    id: "65ecf1f8b465cdd58d9a663d",
    typeId: 2,
    about:
      "Mollit voluptate aliquip officia non anim reprehenderit nisi. Amet in veniam dolor laboris duis. Ea occaecat est dolore elit dolore officia. Esse veniam consequat deserunt incididunt pariatur adipisicing aliquip qui tempor pariatur in tempor eiusmod ea.\r\n",
    lat: -8.459549,
    long: 147.046759,
  },
  {
    id: "65ecf1f84fdfda196185aae2",
    typeId: 4,
    about:
      "Quis fugiat ex esse minim sint est aliquip fugiat consequat adipisicing excepteur voluptate. Ad enim elit eu cillum id ex Lorem. Ut enim magna dolore pariatur eu magna enim adipisicing. Quis pariatur laboris consectetur officia consequat fugiat tempor aute consequat aliqua fugiat sunt mollit velit. Eu ea ullamco in ad veniam.\r\n",
    lat: 84.284536,
    long: 154.132772,
  },
  {
    id: "65ecf1f87d2eeb75ff475dd5",
    typeId: 1,
    about:
      "Nulla sit ad magna magna laboris deserunt fugiat ipsum nulla enim consectetur sunt deserunt. Sunt minim culpa deserunt nisi laboris nulla deserunt mollit labore consectetur. Mollit ea anim ipsum fugiat esse esse ex duis aliqua. Amet ullamco consequat sit cupidatat proident nulla qui cupidatat esse ut. Voluptate cupidatat officia dolore et reprehenderit.\r\n",
    lat: -6.656261,
    long: -56.696365,
  },
  {
    id: "65ecf1f8172efbf3493b5faa",
    typeId: 2,
    about:
      "Laborum qui sint aliquip sit et aute adipisicing culpa nulla nisi. Duis commodo cillum aliquip velit esse commodo ea veniam veniam. Fugiat anim dolore consequat Lorem dolore irure commodo officia ipsum. Fugiat labore laborum nisi sit ipsum et minim tempor anim qui deserunt. Proident amet non est ipsum pariatur commodo magna.\r\n",
    lat: 32.360533,
    long: 89.521309,
  },
  {
    id: "65ecf1f8e5762bebc7188ca5",
    typeId: 2,
    about:
      "Nulla dolore proident laborum minim eu in aliqua ex ipsum nisi. Do exercitation pariatur cillum commodo elit velit duis magna amet. Aute aliquip pariatur est anim aute sint mollit laborum laboris sint pariatur exercitation occaecat.\r\n",
    lat: 37.670252,
    long: 3.358381,
  },
  {
    id: "65ecf1f8af2c881fe7d7d8eb",
    typeId: 3,
    about:
      "Amet velit sit consequat cupidatat nostrud commodo proident irure veniam anim dolore anim irure. Ipsum et elit est voluptate ut veniam excepteur excepteur aliqua. Amet dolor ut exercitation in sint.\r\n",
    lat: -77.093248,
    long: -132.674979,
  },
  {
    id: "65ecf1f8b99d187121848e6f",
    typeId: 2,
    about:
      "Laboris elit voluptate ipsum aliquip. Ullamco enim et proident est elit ut eu exercitation eu. Eiusmod sunt ea fugiat ullamco commodo esse in minim do velit culpa. Ipsum in ex proident anim quis nostrud ut irure nulla. Irure pariatur nostrud laboris aute aute consectetur adipisicing aute dolore exercitation deserunt aliqua.\r\n",
    lat: 29.260874,
    long: 25.977482,
  },
  {
    id: "65ecf1f89c0d7d198aeccf12",
    typeId: 2,
    about:
      "Eu excepteur culpa excepteur labore in aliqua excepteur ut ullamco ut sit laborum amet irure. Excepteur occaecat non dolor Lorem ullamco labore non consequat amet magna occaecat in. Et non anim nostrud labore id adipisicing sunt qui id reprehenderit ad anim ea.\r\n",
    lat: -24.894677,
    long: -99.965494,
  },
  {
    id: "65ecf1f81a7984950dd6ab2f",
    typeId: 1,
    about:
      "Aute qui ipsum mollit eu et sint veniam sit cillum minim commodo occaecat officia duis. Aute officia sunt commodo eu aute officia velit voluptate Lorem mollit cillum adipisicing. Laborum eiusmod tempor non non cupidatat do mollit elit ad veniam esse fugiat. Mollit non est laboris proident ad cillum laborum nostrud.\r\n",
    lat: 48.803391,
    long: -149.337228,
  },
  {
    id: "65ecf1f88546d6ef23ece322",
    typeId: 1,
    about:
      "Adipisicing minim consequat tempor cupidatat nisi nisi ea duis exercitation non. Aliqua qui tempor pariatur tempor occaecat officia exercitation sit est. Qui laboris proident magna velit dolore Lorem ipsum ipsum ullamco est. Est nostrud elit dolor incididunt. In laboris nisi ea reprehenderit aute. Exercitation ut ipsum sit esse minim non id ea velit do qui qui reprehenderit non. Aliqua tempor esse ad est consequat proident ex esse.\r\n",
    lat: -10.832987,
    long: 32.177999,
  },
  {
    id: "65ecf1f8b40fd2048a86f2bd",
    typeId: 3,
    about:
      "Consectetur voluptate voluptate et nulla. Officia aute sunt irure sunt occaecat ullamco sunt eiusmod consectetur. Commodo dolor exercitation anim esse et mollit.\r\n",
    lat: -74.776108,
    long: 133.008402,
  },
  {
    id: "65ecf1f8fd2f3d79257c6a8d",
    typeId: 3,
    about:
      "Velit nisi veniam consectetur nisi non reprehenderit aute aliqua deserunt. Minim dolor laborum id commodo irure esse anim veniam aliquip. Do proident sint anim sint anim aliquip. Quis ullamco id do et reprehenderit velit labore ipsum deserunt consectetur. Deserunt eiusmod officia cupidatat magna veniam reprehenderit adipisicing est officia ex adipisicing aute. Ea aute dolore nostrud culpa laboris cupidatat dolore excepteur. Voluptate reprehenderit Lorem fugiat minim nulla labore deserunt duis est.\r\n",
    lat: 63.269294,
    long: 120.345454,
  },
  {
    id: "65ecf1f8fc925eb644c21006",
    typeId: 2,
    about:
      "Minim ex non consectetur pariatur occaecat do aliqua anim et proident. Minim occaecat cupidatat incididunt et reprehenderit consequat. Cillum quis consequat ex magna duis cupidatat enim commodo.\r\n",
    lat: -57.669054,
    long: -179.847736,
  },
  {
    id: "65ecf1f8f27db9ecf039fe97",
    typeId: 4,
    about:
      "Veniam amet dolor Lorem quis cupidatat voluptate consectetur eiusmod ullamco labore est enim qui. Eiusmod irure aliquip culpa cupidatat. Reprehenderit do reprehenderit deserunt dolore fugiat fugiat ex laborum id pariatur. Nostrud laboris labore cillum magna eu sint laboris minim do cillum excepteur velit tempor Lorem.\r\n",
    lat: -78.259964,
    long: 25.742473,
  },
  {
    id: "65ecf1f8b35b7257ca2a9e4b",
    typeId: 3,
    about:
      "Veniam culpa eiusmod laborum irure ipsum proident nostrud cillum consectetur exercitation dolore cillum. Anim sint voluptate est voluptate eu eiusmod nisi irure. Sint cillum quis mollit et dolor.\r\n",
    lat: -54.630288,
    long: -50.532467,
  },
  {
    id: "65ecf1f8d7609a28de599939",
    typeId: 3,
    about:
      "Nostrud esse Lorem elit et aliqua dolor voluptate id tempor do. Esse laboris magna do ut. Cupidatat id tempor minim amet dolore ad aliquip incididunt mollit laborum in. Id ad amet duis deserunt enim enim magna minim ut. Cillum nulla cupidatat laborum amet amet. Laboris proident est mollit ex deserunt cupidatat aute ullamco ipsum dolor mollit sunt.\r\n",
    lat: 22.071444,
    long: 75.909982,
  },
  {
    id: "65ecf1f81d4ac9cdb4cecff5",
    typeId: 2,
    about:
      "Duis occaecat sit eu non dolor. Deserunt proident aliqua voluptate commodo esse. Reprehenderit et aute deserunt irure. Nostrud qui aute enim officia elit.\r\n",
    lat: 47.576945,
    long: 117.831256,
  },
  {
    id: "65ecf1f837de5cac940feced",
    typeId: 1,
    about:
      "Ullamco est eu pariatur do velit consectetur dolor nulla in. Proident non ut amet irure eiusmod esse exercitation elit incididunt enim consequat. Do ut fugiat sit ad Lorem cillum Lorem Lorem dolore anim. Amet in proident amet pariatur ut eiusmod.\r\n",
    lat: -37.366435,
    long: -153.472392,
  },
  {
    id: "65ecf1f83bd86ba13a90b551",
    typeId: 1,
    about:
      "Ad sint elit tempor sint ut est officia exercitation in fugiat aute anim. Enim duis dolor exercitation adipisicing dolor incididunt laborum occaecat do aliquip reprehenderit irure laborum. In ex incididunt ullamco commodo sit ad do. Et tempor qui velit eiusmod in fugiat occaecat duis mollit pariatur incididunt velit veniam.\r\n",
    lat: 82.731321,
    long: -173.405027,
  },
  {
    id: "65ecf1f845288811d89ae167",
    typeId: 4,
    about:
      "Elit ipsum et fugiat minim culpa cillum. Adipisicing amet duis occaecat enim sit non elit esse. Sit eiusmod minim est consequat officia velit nostrud nostrud proident consectetur sit culpa dolore nostrud. Aliquip adipisicing sunt excepteur culpa deserunt et duis. Qui ullamco qui deserunt eu anim culpa ut officia occaecat laborum ea adipisicing.\r\n",
    lat: 57.760526,
    long: 150.089904,
  },
  {
    id: "65ecf1f8f4c8c657193d3fd7",
    typeId: 1,
    about:
      "Pariatur tempor sunt do ullamco sint dolore amet ex dolore aute velit pariatur nisi pariatur. Consectetur tempor aute deserunt in sint in ea et proident sit. Aute mollit excepteur cillum ea culpa tempor in est dolore. Nostrud deserunt amet reprehenderit amet excepteur consectetur nisi dolore. Quis do adipisicing esse ad consectetur mollit culpa laboris sint quis. Exercitation deserunt velit reprehenderit adipisicing anim consequat elit pariatur commodo et consequat irure. Labore non commodo cillum adipisicing est officia non ea aliquip fugiat eu cupidatat consequat sit.\r\n",
    lat: -31.698956,
    long: 161.299264,
  },
  {
    id: "65ecf1f85ee08e73a68c7e78",
    typeId: 4,
    about:
      "Consectetur laboris esse Lorem sint aliqua ut do. Eu non amet enim sit labore ad consequat dolor cupidatat et elit. Laborum anim deserunt proident commodo et nostrud quis consectetur aliquip sit elit. Ad cillum occaecat enim anim ad. Lorem duis sit ut Lorem ut proident sit sint. Voluptate amet minim anim dolore laboris ad irure ipsum pariatur adipisicing nisi. Id anim cupidatat quis ipsum nostrud fugiat enim consectetur eiusmod commodo aliquip aliqua reprehenderit ipsum.\r\n",
    lat: 7.354506,
    long: -93.109508,
  },
];
function MapBanner({
  mapReport,
  setType,
  openDrawer,
  setReportContractorDetails,
  setReportEmployeeDetails,
  type,
  mapPositions,
}: PropsType) {
  const [currentCenter, setCurrentCenter] = useState<number | undefined>(
    undefined
  );
  const [cityCenter, setCityCenter] = useState({
    lat: 24.774265,
    lng: 46.738586,
  });
  const [selectCity, setSelectCity] = useState<MapPositionsType | undefined>(
    undefined
  );
  function handleChangeCenterByReport(indexIncrement: number = 1) {
    if (!mapReport) return;
    const newCenterIndex =
      typeof currentCenter === "number" ? currentCenter + indexIncrement : 0;
    console.log(newCenterIndex);
    if (newCenterIndex >= 0 && newCenterIndex < mapReport?.length) {
      setCurrentCenter(newCenterIndex);
    } else {
      setCurrentCenter(0);
    }
  }
  let points = [...allPoints];
  if (selectCity) {
    points = allPoints.filter((point) => point.typeId == selectCity.typeId);
  }
  return (
    <Stack sx={{ width: 1, height: 1, position: "relative" }}>
      <Backdrop open={!mapReport} sx={{ position: "absolute", zIndex: 100 }}>
        <CircularProgress />
      </Backdrop>
      {mapReport ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: GoogleMapApiKey }}
          center={cityCenter}
          defaultZoom={1}
          key={`${cityCenter.lat}, ${cityCenter.lng}, ${"currentCenter"}`}
          options={{ fullscreenControl: false }}
        >
          {points.map((point) => (
            <Marker
              lat={point.lat}
              lng={point.long}
              title={point.about}
              key={`${point.id} `}
              toolTipId={point.typeId?.toString()}
              src={pinIcon}
              style={{
                backgroundColor: "#fff ",
                borderRadius: "50%",
                padding: "5px",
                border: " dashed tomato 2px",
              }}
              // onClick={() => {
              //   console.log("pressed");
              //   if (report.employee) {
              //     setReportEmployeeDetails(report.employee);
              //   } else if (report.contractor) {
              //     setReportContractorDetails(report.contractor);
              //   }
              //   openDrawer();
              // }}
            />
          ))}
        </GoogleMapReact>
      ) : (
        <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
      )}
      {mapReport?.map((item) => (
        <Tooltip id={item.id.toString()} />
      ))}
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems={{ xs: "end", md: "center" }}
        spacing={1}
        p={1}
        sx={{
          position: "absolute",
          top: 0,
          right: { xs: 0, md: 50 },
        }}
      >
        {mapPositions.map((city) => (
          <Button
            onClick={() => {
              if (city.typeId == selectCity?.typeId) setSelectCity(undefined);
              else setSelectCity(city);
            }}
            key={city.typeId}
            variant="text"
            sx={(theme) => ({
              backgroundColor:
                city.typeId == selectCity?.typeId
                  ? `${theme.palette.secondary.main} !important`
                  : `${theme.palette.background.default} !important`,
              color:
                city.typeId == selectCity?.typeId
                  ? `${theme.palette.background.default} !important`
                  : `${theme.palette.secondary.main} !important`,
            })}
          >
            {city.name}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}

type PropsType = {
  mapReport?: MapReportBase[];
  type: MapReportTypes;
  setType: (type: MapReportTypes) => void;
  openDrawer: () => void;
  setReportEmployeeDetails: (employee?: Employee) => void;
  setReportContractorDetails: (contractor?: MapReportContractor) => void;
  mapPositions: MapPositionsType[];
};

export type MapReportBase = {
  name: string;
  lat: number;
  lng: number;
  id: number;
  type: MapReportTypes;
  contractor?: MapReportContractor;
  employee?: Employee;
};
type MapPositionsType = {
  name: string;
  typeId: number;
  center: { lat: number; lng: number };
};
type Point = {
  id: string;
  typeId: number;
  about: string;
  lat: number;
  long: number;
};

export default MapBanner;
