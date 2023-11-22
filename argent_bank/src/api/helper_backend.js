import { APIClient } from "./helper_api";

import * as url from "./helper_url";

const api = new APIClient();


/*************************/
/*    Authentificatiion  */
/*************************/

// loginUser
export const postLogin = (data) => api.create(url.LOGIN,data);


/*************************/
/*        Profil         */
/*************************/


// profilUser
export const getProfil = () => api.create(url.PROFIL);
export const postProfil = (data) => api.put(url.PROFIL,data);