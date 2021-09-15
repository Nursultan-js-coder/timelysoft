interface IParams {
  e?: any;
}

export function toggleDropdown<IParams>(e?: any) {
  const navItem = e.target.parentElement;
  const dropdown = navItem.querySelector(".dropdown");
  const dropdowns = navItem.parentElement.querySelectorAll(".dropdown");
  dropdowns.forEach((element: any) => {
    if (element !== dropdown) {
      if (!element.classList.contains("hidden"))
        element.classList.add("hidden");
    }
  });
  if (dropdown.classList.contains("hidden"))
    dropdown.classList.remove("hidden");
  else dropdown.classList.add("hidden");
}
