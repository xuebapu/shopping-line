import {requestLocal} from "./requestLocal";

export function login(name) {
  return requestLocal({
    url:'/login',
    params:{
      name:name,
    },
  })
}
