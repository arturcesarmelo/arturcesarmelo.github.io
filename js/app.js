angular.module('cv', [])

.controller('greedingsCtrl', function($scope){
    $scope.name = "Artur Cesar de Melo";
    $scope.ocupation = "Desenvolvedor PHP Full-Stack ";
    $scope.aboutMe = {
      age:26,
      nationality: "Brasileiro",
      civilState: "Casado"
    };
})

.controller('timelineCtrls', function($scope){
    $scope.employments = [
      {
        name:"Mam.bo",
        tecnologies:"PHP, VueJS , MySQL, Laravel",
        ocupation:"Desenvolvedor PHP Full-Stack pleno.",
        description:"Desenvolvedor Full-Stack",
        url:"http://mam.bo/",
        date:{
          beginYear: '2016',
          endYear: 'Atualmente',
          beginMonth: 'Maio',
          endMonth: ''
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
})

.controller('contactCtrl', function($scope){
  $scope.address = "57.038.050 - Av. Com. Gustavo Paiva, Conj. Dom Adelmo Machado bt.07 apt.09 - Cruz das Almas - Maceió/AL"
  $scope.phoneNumber = "+55 (82) 99617-7917";
  $scope.email = "arturcesarmelo@hotmail.com";
})
