var app = angular.module('app', ['ui.router', 'chart.js']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/pt');
  $stateProvider 
    .state('pt', {
        url: '/pt',
        templateUrl: './templates/page.html',
        controller:'portugeseCtrl'
    })
    .state('en', {
      url: '/en',
      templateUrl: './templates/page.html',
      controller:'englishCtrl'
  })

});
app.controller('chartCtrl', function($scope) {
  $scope.labels = [
      'Laravel',
      'NodeJS',
      'C#',
      'Angular',
      'VueJS',
      'React'
    ];
  
    $scope.series = ['Percent of knowledge'];

    $scope.data = [
        [
          90, // Laravel
          75, // NodeJS
          75, // C#
          85,  // Angular
          90,  // VueJS
          75  // React
        ]
    ];
})
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
app.controller('portugeseCtrl', function($scope, ageService, mapsService){

    $scope.ocupation = "Desenvolvedor PHP Full-Stack ";
    
    $scope.timeLine = {
      info: 'mais informações'
    }

    $scope.aboutMe = {
      age: ageService.calculate('1990/03/19') + ' anos',
      nationality: "Brasileiro",
      civilState: "Solteiro"
    };

    $scope.academy = {
      header: 'Formação',
      course: 'Bacharelado em Sistema de Informação',
      name: 'Universidade Federal de Alagoas',
      status: {
        text: 'Em andamento'
      }
    };

    $scope.exp = {
      header: 'Experiências',
    }

    $scope.skill = {
      header: 'Habilidades'
    };

    $scope.contact = {
      header: 'Contato',
      address: 'R. Efigênio Ferreira de Lima, nº 335 - Antares - Maceió/AL',      
      phoneNumber: '(82)99617-7917',
      email: 'arturcesarmelo@gmail.com',
      maps: `https://maps.googleapis.com/maps/api/staticmap?center=${mapsService.lat},${mapsService.lang}&zoom=17&size=370x130&maptype=roadmap
      &markers=color:red%7Clabel:C%7C${mapsService.lat},${mapsService.lang}&key=AIzaSyBhQrMdkwItRJlk63m_uplTIW0aoxd-u2Q`
    }

    $scope.employments = [
      {
        name:"Mesha",
        tecnologies:"Laravel, NodeJS, C# (.NET Core), VueJS, PostgresQL, PLSQL, Sql Server",
        ocupation:"Analista Desenvolvedor Sênior.",
        description:"Analista Desenvolvedor",
        url:"https://mesha.co/",
        date:{
          beginYear: '2017',
          endYear: 'Atualmente',
          beginMonth: 'October',
          endMonth: ''
        }
      },
      {
        name:"Mam.bo",
        tecnologies:"PHP, VueJS , MySQL, Laravel",
        ocupation:"Desenvolvedor PHP Full-Stack pleno.",
        description:"A Mam.bo é uma software house que usa o Laravel em seus principais projetos. Trabalhei como desenvolvedor de web criando novos projetos e implementando recursos em projetos legados.",
        url:"http://mam.bo/",
        date:{
          beginYear: '2016',
          endYear: '2017',
          beginMonth: 'Maio',
          endMonth: 'October'
        }
      },
      {
        name:"GLOBAL TECNOLOGIA",
        tecnologies:"PHP, AngularJS , PostgresQL, RESTful",
        ocupation:"Desenvolvedor Full-Stack jr.",
        description:"Trabalhei no desenvolvimento de um ERP para gestão de provedores de internet autônomos usando integração com PHP e Mikrotik; Desenvolvi o módulo  'central do assinante' e  adaptei o ERP para locação de equipamentos.",
        url:"http://www.gestorglobal.com.br/",
        date:{
          beginYear: '2015',
          endYear: '2016',
          beginMonth: 'fevereiro',
          endMonth: 'Maio'
        }
      },
      {
        name:"Meu Tutor",
        tecnologies:"PHP, jQuery, Smarty",
        ocupation:"Desenvolvedor Full-Stack jr.",
        description:"Aqui foi onde tudo começou. Fui membro da equipe que desenvolveu o sistema educacional por tutoramento. Infelizmente meu tempo na equipe foi curto devido ao corte de investimentos do CNPq",
        url: "http://meututor.com.br/",
        date:{
          beginYear: '2015',
          endYear: '2015',
          beginMonth: 'janeiro',
          endMonth: 'Maio'
        }
      },

    ]

});
app.service('ageService', function() {
    let service = {
        calculate: function(dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
    }

    return service;
})
app.service('mapsService', function() {
	return maps = {
      lat: '-9.5806634',
      lang: '-35.7423044'
    }
})