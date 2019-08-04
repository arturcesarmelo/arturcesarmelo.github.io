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