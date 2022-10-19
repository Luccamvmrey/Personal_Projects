export function postClick(clicks) {
  const data = {
    clicks: clicks,
  };

  fetch("/game/clicks", {
    method: "POST",
    body: data,
  });
}
