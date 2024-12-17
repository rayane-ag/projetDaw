// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item=> {
  const a = item.parentElement.querySelector('a:first-child');
  a.addEventListener('click', function (e) {
    e.preventDefault();

    if(!this.classList.contains('active')) {
      allDropdown.forEach(i=> {
        const aLink = i.parentElement.querySelector('a:first-child');

        aLink.classList.remove('active');
        i.classList.remove('show');
      })
    }

    this.classList.toggle('active');
    item.classList.toggle('show');
  })
})




// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if(sidebar.classList.contains('hide')) {
  allSideDivider.forEach(item=> {
    item.textContent = '-'
  })
  allDropdown.forEach(item=> {
    const a = item.parentElement.querySelector('a:first-child');
    a.classList.remove('active');
    item.classList.remove('show');
  })
} else {
  allSideDivider.forEach(item=> {
    item.textContent = item.dataset.text;
  })
}

toggleSidebar.addEventListener('click', function () {
  sidebar.classList.toggle('hide');

  if(sidebar.classList.contains('hide')) {
    allSideDivider.forEach(item=> {
      item.textContent = '-'
    })

    allDropdown.forEach(item=> {
      const a = item.parentElement.querySelector('a:first-child');
      a.classList.remove('active');
      item.classList.remove('show');
    })
  } else {
    allSideDivider.forEach(item=> {
      item.textContent = item.dataset.text;
    })
  }
})



sidebar.addEventListener('mouseleave', function () {
  if(this.classList.contains('hide')) {
    allDropdown.forEach(item=> {
      const a = item.parentElement.querySelector('a:first-child');
      a.classList.remove('active');
      item.classList.remove('show');
    })
    allSideDivider.forEach(item=> {
      item.textContent = '-'
    })
  }
})


sidebar.addEventListener('mouseenter', function () {
  if(this.classList.contains('hide')) {
    allDropdown.forEach(item=> {
      const a = item.parentElement.querySelector('a:first-child');
      a.classList.remove('active');
      item.classList.remove('show');
    })
    allSideDivider.forEach(item=> {
      item.textContent = item.dataset.text;
    })
  }
})



// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
  dropdownProfile.classList.toggle('show');
})



// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');

allMenu.forEach(item=> {
  const icon = item.querySelector('.icon');
  const menuLink = item.querySelector('.menu-link');

  icon.addEventListener('click', function () {
    menuLink.classList.toggle('show');
  })
})


window.addEventListener('click', function (e) {
  if(e.target !== imgProfile) {
    if(e.target !== dropdownProfile) {
      if(dropdownProfile.classList.contains('show')) {
        dropdownProfile.classList.remove('show');
      }
    }
  }

  allMenu.forEach(item=> {
    const icon = item.querySelector('.icon');
    const menuLink = item.querySelector('.menu-link');

    if(e.target !== icon) {
      if(e.target !== menuLink) {
        if (menuLink.classList.contains('show')) {
          menuLink.classList.remove('show')
        }
      }
    }
  })
})




// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');

allProgress.forEach(item=> {
  item.style.setProperty('--value', item.dataset.value)
})





// APEXCHART
var options = {
  series: [{
  name: 'TEAM A',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'TEAM B',
  type: 'area',
  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
  name: 'TEAM C',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
  '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
],
markers: {
  size: 0
},
xaxis: {
  type: 'datetime'
},
yaxis: {
  title: {
    text: 'Points',
  }
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " points";
      }
      return y;

    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

