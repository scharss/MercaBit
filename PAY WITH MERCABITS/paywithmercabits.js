/* Moralis init code */
const serverUrl = "https://q19ug6sy6ons.usemoralis.com:2053/server";
const appId = "PvbR9TaHPQC0BlzcQwIZyOa1me8uagVnLa4dvIth";
Moralis.start({ serverUrl, appId });

/* TODO: Add Moralis Authentication code */
/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using MercaPlace.com" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("BNB_Address"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;