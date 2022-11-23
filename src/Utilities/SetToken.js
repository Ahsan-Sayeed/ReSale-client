import React from "react";

const GetToken = (token) => {

  fetch("https://wedding-nine-steel.vercel.app/jwt", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({key:token}),
  })
    .then((response) => response.json())
    .then((data) => {
      setCookie("Token",data.token,7);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export default GetToken;
