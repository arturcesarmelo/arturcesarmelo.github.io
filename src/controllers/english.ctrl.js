app.controller('englishCtrl', function($scope, ageService, mapsService){

    $scope.ocupation = "Full-Stack PHP developer";
    
    $scope.timeLine = {
      info: 'more information'
    }

    $scope.aboutMe = {
      age: ageService.calculate('1990/03/19') + ' years old',
      nationality: "Brazilian",
      civilState: "Single"
    };

    $scope.academy = {
      header: 'Escolarity',
      course: 'Bachelor Degree in Information Sistem',
      name: 'Feredal University of Alagoas',
      status: {
        text: 'In progress'
      }
    };

    $scope.exp = {
      header: 'Experiences',
    }

    $scope.skill = {
      header: 'Skills'
    };
    
    $scope.contact = {
      header: 'Contact',
      address: 'St. Efigênio Ferreira de Lima, nº 335 - Antares - Maceió/AL - Brazil',
      phoneNumber: '+5582996177917',
      email: 'arturcesarmelo@gmail.com',
      maps: `https://maps.googleapis.com/maps/api/staticmap?center=${mapsService.lat},${mapsService.lang}&zoom=15&size=370x130&maptype=roadmap
      &markers=color:red%7Clabel:C%7C${mapsService.lat},${mapsService.lang}&key=AIzaSyBhQrMdkwItRJlk63m_uplTIW0aoxd-u2Q`
    }

    $scope.employments = [
      {
        name:"Bluevox",
        tecnologies:"PHP, VueJS , PostgresQL, PLSQL, Laravel",
        ocupation:"Sênior PHP Full-Stack Developer.",
        description:"Full-Stack Developer",
        url:"https://bluevox.com.br/",
        date:{
          beginYear: '2017',
          endYear: 'Current date',
          beginMonth: 'October',
          endMonth: ''
        }
      },
      {
        name:"Mam.bo",
        tecnologies:"PHP, VueJS , MySQL, Laravel",
        ocupation:"Plenum PHP Full-Stack Developer.",
        description:"Mam.bo is a software houser which using Laravel in its main projects. I used to develop new prjoects as well as implementing new features on legacy projects.",
        url:"http://mam.bo/",
        date:{
          beginYear: '2016',
          endYear: '2017',
          beginMonth: 'May',
          endMonth: 'October'
        }
      },
      {
        name:"Global Tecnologies",
        tecnologies:"PHP, AngularJS , PostgresQL, RESTful",
        ocupation:"Full-Stack developer jr.",
        description:"I worked on a ERP development to manage Internet providers using PHP and Angular into a RESTful architeture; Also developed the central module of subscription and ERP's adaptation to rent equipment market.",
        url:"http://www.gestorglobal.com.br/",
        date:{
          beginYear: '2015',
          endYear: '2016',
          beginMonth: 'February',
          endMonth: 'May'
        }
      },
      {
        name:"Meu Tutor",
        tecnologies:"PHP, jQuery, Smarty",
        ocupation:"Full-Stack developer jr.",
        description:"This is where it all began. I was a member of the team that developed the educational system by tutoring. Unfortunately my time in the team was short due to the cut of investments of CNPq",
        url: "http://meututor.com.br/",
        date:{
          beginYear: '2015',
          endYear: '2015',
          beginMonth: 'January',
          endMonth: 'May'
        }
      },

    ]

});