const today = new Date();

let year = document.getElementById("currentyear");
let last = document.getElementById("lastModified");

let currentYear = today.getFullYear();
let lastModified = document.lastModified;

year.innerHTML = currentYear;
last.innerHTML = `Last Modification: ${lastModified}`;

  
document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("membersContainer");
    const toggleViewGridButton = document.getElementById("toggleViewGrid");
    const toggleViewListButton = document.getElementById("toggleViewList");
  
    async function fetchMembers() {
      const response = await fetch("data/members.json");
      const members = await response.json();
      displayMembers(members);
    }
  
    function displayMembers(members) {
      membersContainer.innerHTML = "";
      members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.className = "member-card";
        memberCard.innerHTML = `
          <div><img src="images/${member.image}" alt="${member.name}"></div>
          <div>
            <h2>${member.name}</h2>
            <p>${member.description}</p>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Website</a></p>
            <p>Membership Level: ${member.membership_level}</p>
          </div>
        `;
        const simpleList = document.createElement("div");
        simpleList.className = "simple-list";
        simpleList.innerHTML = `
          <p>${member.name}</p>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        `;
        memberCard.appendChild(simpleList);
        membersContainer.appendChild(memberCard);
      });
    }
  
    toggleViewGridButton.addEventListener("click", () => {
      membersContainer.classList.add("grid-view");
      membersContainer.classList.remove("list-view");
    });
  
    toggleViewListButton.addEventListener("click", () => {
      membersContainer.classList.add("list-view");
      membersContainer.classList.remove("grid-view");
    });
  
    fetchMembers();
  });
  