const func = async () => {
  let data = {
    page: "SRE_DOCUMENTATION_PAGE",
    key: "analytics-is-great"
  }

  console.log(data)
  const res = await fetch(`https://g43xr00009062.az3.ash.cpc.ibm.com?page=${location.href}&key=${data.key}`, {
                method: "GET",
                mode: "no-cors"
              })
  console.log(res)
}

let previousUrl = '', int;
const observer = new MutationObserver(function(mutations) {
  if (location.href !== previousUrl) {
      clearTimeout(int)
      previousUrl = location.href;
      int = setTimeout(() => func(), 2000)
      console.log(`URL changed to ${location.href}`);
    }
});
const config = {subtree: true, childList: true};
observer.observe(document, config);
