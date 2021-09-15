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
import BlogsPage from "../views/timely-blog/blogs-page";
import BlogDetail from "../views/timely-blog/blog-detail";
import CreateBlog from "../views/timely-blog/create-blog";

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
  path: String;
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
    path: "/features",
    subMenus: [
      {
        name: "track time",
        logo: clockIcon,
        path: "/time",
        navigated: false,
        component: null,
      },
      {
        name: "track projects",
        logo: clockIcon,
        path: "/project",
        navigated: false,
        component: null,
      },
      {
        name: "track teams",
        logo: userGroupIcon,
        path: "/teams",
        navigated: false,
        component: null,
      },
      {
        name: "track plans",
        logo: calendarIcon,
        path: "/plans",
        navigated: false,
        component: null,
      },
      {
        name: "integrations",
        logo: grid_addIcon,
        path: "/integrations",
        navigated: false,
        component: null,
      },
    ],
  },
  {
    name: "Solutions",
    path: "/solutions",
    subMenus: [
      {
        name: "Remote Teams",
        logo: remote_teamsIcon,
        path: "/remote-teams",
        navigated: false,
        component: null,
      },
      {
        name: "It Consultants",
        logo: microsoftIcon,
        path: "/it-consultants",
        navigated: false,
        component: null,
      },
      {
        name: "Management Consultants",
        logo: pieIcon,
        path: "/management-consultants",
        navigated: false,
        component: null,
      },
      {
        name: "Agencies",
        logo: filterIcon,
        path: "/agencies",
        navigated: false,
        component: null,
      },
      {
        name: "Accountants",
        logo: calculatorIcon,
        path: "/accountants",
        navigated: false,
        component: null,
      },
      {
        name: "Freelancers",
        logo: freelancersIcon,
        path: "/freelancers",
        navigated: false,
        component: null,
      },
    ],
  },
  {
    name: "Resources",
    path: "/resources",
    subMenus: [
      {
        name: "Timely Blog",
        logo: arrowUpIcon,
        path: "/timely-blog",
        navigated: false,
        component: BlogsPage,
        children: [
          {
            name: "Create Blog",
            path: "/create",
            navigated: false,
            component: CreateBlog,
          },
          {
            name: "Edit Blog",
            path: "/edit/:id",
            navigated: false,
            component: null,
          },
          {
            name: "Blog detail",
            path: "/detail/:id",
            navigated: false,
            component: BlogDetail,
          },
        ],
      },
      {
        name: "Case Studies",
        logo: newspaperIcon,
        path: "/case-studies",
        navigated: false,
        component: null,
      },
      {
        name: "Podcasts",
        logo: microsoftIcon,
        path: "/podcasts",
        navigated: false,
        component: null,
      },
      {
        name: "Books",
        logo: bookIcon,
        path: "/books",
        navigated: false,
        component: null,
      },
      {
        name: "Webinars",
        logo: ideaIcon,
        path: "/webinars",
        navigated: false,
        component: null,
      },
    ],
  },
];
