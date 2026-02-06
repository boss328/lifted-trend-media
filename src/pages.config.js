/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import About from './pages/About';
import B2CConversion from './pages/B2CConversion';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Home from './pages/Home';
import LeadsDashboard from './pages/LeadsDashboard';
import Privacy from './pages/Privacy';
import Process from './pages/Process';
import Resources from './pages/Resources';
import Solutions from './pages/Solutions';
import Terms from './pages/Terms';
import ThankYouB2C from './pages/ThankYouB2C';
import ThankYouWholesale from './pages/ThankYouWholesale';
import WholesaleGrowth from './pages/WholesaleGrowth';
import ProofLibrary from './pages/ProofLibrary';
import FarmGrowthAudit from './pages/FarmGrowthAudit';
import NurseryGrowth from './pages/NurseryGrowth';
import FruitFarmGrowth from './pages/FruitFarmGrowth';
import RanchGrowth from './pages/RanchGrowth';
import OrchardGrowth from './pages/OrchardGrowth';
import FlowerFarmGrowth from './pages/FlowerFarmGrowth';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "B2CConversion": B2CConversion,
    "CaseStudies": CaseStudies,
    "Contact": Contact,
    "Home": Home,
    "LeadsDashboard": LeadsDashboard,
    "Privacy": Privacy,
    "Process": Process,
    "Resources": Resources,
    "Solutions": Solutions,
    "Terms": Terms,
    "ThankYouB2C": ThankYouB2C,
    "ThankYouWholesale": ThankYouWholesale,
    "WholesaleGrowth": WholesaleGrowth,
    "ProofLibrary": ProofLibrary,
    "FarmGrowthAudit": FarmGrowthAudit,
    "NurseryGrowth": NurseryGrowth,
    "FruitFarmGrowth": FruitFarmGrowth,
    "RanchGrowth": RanchGrowth,
    "OrchardGrowth": OrchardGrowth,
    "FlowerFarmGrowth": FlowerFarmGrowth,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};