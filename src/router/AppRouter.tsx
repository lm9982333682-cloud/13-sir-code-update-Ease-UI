import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ComponentLayout from "../layouts/ComponentLayout";
import HomePage from "../pages/HomePage";
import ButtonPage from "../pages/components/ButtonPage";
import CardPage from "@/pages/components/CardPage";
import ModalPage from "@/pages/components/ModalPage";
import InputPage from "@/pages/components/InputPage";
import NavbarPage from "@/pages/components/NavbarPage";
import TooltipPage from "../pages/components/TooltipPage";





import LayoutPage from "@/pages/components/LayoutPage";




import AboutPage from '@/pages/AboutPage';
import Carousel from "@/pages/components/Carousel";
import FormPage from "@/pages/components/FormPage";

import LoadingPage from "@/pages/components/LoadingPage";
import ErrorPage from "@/pages/components/ErrorPage";
import SuccessPage from "@/pages/components/SuccessPage";
import ApiPage from "@/pages/components/ApiPage";
import RandomColorPage from "@/pages/components/RandomColorPage";
import AccordionPage from "@/pages/components/AccordionPage";
import TabsPage from "@/pages/components/TabsPage";
import CollapsePage from "@/pages/components/CollapsePage";
import DialogPage from "@/pages/components/DialogPage";
import TablePage from "@/pages/components/TablePage";
import ListPage from "@/pages/components/ListPage";
import CounterPage from "@/pages/components/CounterPage";
import PaginationPage from "@/pages/components/PaginationPage";
import ImageGalleryPage from "@/pages/components/ImageGalleryPage";

type Props = {};

const AppRouter = ({ }: Props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "components",
          element: <ComponentLayout />,
          children: [
            {
              path: "button",
              element: <ButtonPage />,
            },
            {
              path: "card",
              element: <CardPage />,
            },
            {
              path: "modal",
              element: <ModalPage />,
            },
            {
              path: "input",
              element: <InputPage />,
            },
            {
              path: "navbar",
              element: <NavbarPage />,
            },
            {
              path: "tooltip",
              element: <TooltipPage />,
            },
            {
              path: "layout",
              element: <LayoutPage />,
            },
            {
              path: "carousel",
              element: <Carousel />,
            },
            {
              path: "form",
              element: <FormPage />,
            },
            {
              path: "loading",
              element: <LoadingPage />,
            },
            {
              path: "error",
              element: <ErrorPage />,
            },
            {
              path: "success",
              element: <SuccessPage />,
            },
            {
              path: "api",
              element: <ApiPage />,
            },
            {
              path: "color",
              element: <RandomColorPage />,
            },
            {
              path: "accordion",
              element: <AccordionPage />,
            },
            {
              path: "tabs",
              element: <TabsPage />,
            },
            {
              path: "collapse",
              element: <CollapsePage />,
            },
            {
              path: "dialog",
              element: <DialogPage />,
            },
            {
              path: "table",
              element: <TablePage />,
            },
            {
              path: "list",
              element: <ListPage />,
            },
            {
              path: "counter",
              element: <CounterPage />,
            },
            {
              path: "pagination",
              element: <PaginationPage />,
            },
            {
              path: "imagegallery",
              element: <ImageGalleryPage />,
            },

          ],
        },
      ],


    },

    {
      path: "/about-page",
      element: <AboutPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
