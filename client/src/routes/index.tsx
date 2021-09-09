import HomePage from "../views/home";
import { TIMELY_BLOG, HOME_PAGE } from "./constants";
import arrowUpIcon from "../assets/icons/arrow_up.svg";
import bookIcon from "../assets/icons/book.svg";
import calculatorIcon from "../assets/icons/calculator.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import clockIcon from "../assets/icons/clock.svg";
import filterIcon from "../assets/icons/filter.svg";
import freelancersIcon from "../assets/icons/freelancers.svg";
import grid_addIcon from "../assets/icons/grid_add.svg";
import ideaIcon from "../assets/icons/idea.svg";
import microsoftIcon from "../assets/icons/microsoft.svg";
import newspaperIcon from "../assets/icons/newspaper.svg";
import pieIcon from "../assets/icons/pie.svg";
import remote_teamsIcon from "../assets/icons/remote_teams.svg";
import tableIcon from "../assets/icons/table.svg";
import userGroupIcon from "../assets/icons/user-group.svg";

export interface IRoute {
  navigated: boolean;
  path: string;
  name: string;
  // component: React.ComponentType<any>;
  component: any; // only for this time any then i will change
  children?: IRoute[];
  logo?: any;
}
export interface IMenu {
  subMenus: Array<IRoute>;
  name: String;
}

export const routes: IRoute[] = [
  {
    navigated: false,
    path: "/",
    name: "home-page",
    // component: React.ComponentType<any>;
    component: HomePage, // only for this time any then i will change
  },
];

export const menus: IMenu[] = [
  {
    name: "Features",
    subMenus: [
      {
        name: "track time",
        logo: clockIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "track projects",
        logo: clockIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "track teams",
        logo: userGroupIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "track plans",
        logo: calendarIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "integrations",
        logo: grid_addIcon,
        path: "#",
        navigated: false,
        component: null,
      },
    ],
  },
  {
    name: "Solutions",
    subMenus: [
      {
        name: "Remote Teams",
        logo: remote_teamsIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "It Consultants",
        logo: microsoftIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "Management Consultants",
        logo: pieIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "Agencies",
        logo: filterIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "Accountants",
        logo: calculatorIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "Freelancers",
        logo: freelancersIcon,
        path: "#",
        navigated: false,
        component: null,
      },
    ],
  },
  {
    name: "Resources",
    subMenus: [
      {
        name: "Timely Blog",
        logo: arrowUpIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "Case Studies",
        logo: newspaperIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "Podcasts",
        logo: microsoftIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "Books",
        logo: bookIcon,
        path: "#",
        navigated: false,
        component: null,
      },
      {
        name: "Webinars",
        logo: ideaIcon,
        path: "#",
        navigated: false,
        component: null,
      },
    ],
  },
];
