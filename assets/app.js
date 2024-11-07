
$(document).ready(function () {
  Menu.toogle();
  Menu.showTextMenu();

  File.upload();

  //upload
  var data = [
    {
      id: 1,
      heure: "7h - 15h",
      nom: "Ando",
      hotel: "Carlton",
      adresse: "23 rue de l'Indépendance",
      contact: "0345678901",
    },
    {
      id: 2,
      heure: "8h - 14h",
      hotel: "Ibis",
      nom: "Haja",
      adresse: "56 rue Razanamihaja",
      contact: "0346789012",
    },
    {
      id: 3,
      heure: "9h - 13h",
      hotel: "Hilton",
      nom: "Fara",
      adresse: "10 avenue de l’Université",
      contact: "0347890123",
    },
    {
      id: 4,
      heure: "11h - 12h",
      hotel: "Le Louvre",
      nom: "Voara",
      adresse: "78 rue d’Ambohitsirohitra",
      contact: "0348901234",
    },
    {
      id: 5,
      heure: "12h - 13h",
      hotel: "Carlton",
      nom: "Tahina",
      adresse: "34 rue du Commerce",
      contact: "0349012345",
    },
    {
      id: 6,
      heure: "16h - 18h",
      hotel: "Ibis",
      nom: "Solo",
      adresse: "12 rue de Mahamasina",
      contact: "0340123456",
    },
    {
      id: 7,
      heure: "17h - 19h",
      hotel: "Hilton",
      nom: "Lova",
      adresse: "89 avenue de l’Amitié",
      contact: "0341234567",
    },
    {
      id: 8,
      heure: "17h - 19h",
      hotel: "Hilton",
      nom: "Lova",
      adresse: "89 avenue de l’Amitié",
      contact: "0341234567",
    },
    {
      id: 9,
      heure: "17h - 19h",
      hotel: "Hilton",
      nom: "Lova",
      adresse: "89 avenue de l’Amitié",
      contact: "0341234567",
    },
    {
      id: 10,
      heure: "17h - 19h",
      hotel: "Hilton",
      nom: "Lova",
      adresse: "89 avenue de l’Amitié",
      contact: "0341234567",
    },
  ];

  var dataCar = {
    voiture: "Voiture 1",
    trajet: "Analakely- Mahazo",
    data: [
      {id: 'c', personnel: { id: 1, name: "Vonjy", adresse: "67ha", point: "106" }},
      {id: 'p1', personnel: { id: 1, date: "7h - 15h", hotel: "Carlton", nom: "Ando", adresse: "23 rue de l’Indépendance",contact: "0345678901",}},
      {id: 'p2', personnel: { id: 1, date: "7h - 15h", hotel: "Carlton", nom: "Ando", adresse: "23 rue de l’Indépendance",contact: "0345678901",}},
      {id: 'p3', personnel: { id: 3, date: "7h - 15h", hotel: "Carlton", nom: "Lova", adresse: "23 rue de l’Indépendance",contact: "0345678901",}},
      {id: 'p4', personnel: { id: 4, date: "7h - 15h", hotel: "Carlton", nom: "koko", adresse: "23 rue de l’Indépendance",contact: "0345678901",}},
      {id: 'p5', personnel: ""},
      {id: 'p6', personnel: ""},
      {id: 'p7', personnel: ""},
      {id: 'p8', personnel: ""},
      {id: 'p9', personnel: ""},
      {id: 'p10', personnel: ""},
      {id: 'p11', personnel: ""},
      {id: 'p12', personnel: ""},
      {id: 'p13', personnel: ""},
      {id: 'p14', personnel: ""},
      {id: 'p15', personnel: ""},
      {id: 'p16', personnel: ""},
      {id: 'p17', personnel: ""},
      {id: 'p18', personnel: ""},
      {id: 'p19', personnel: ""},
      {id: 'p20', personnel: ""},
      {id: 'p21', personnel: ""},
      {id: 'p22', personnel: ""},
    ],
  };
  
  Car.headerDisplay(dataCar);
  Car.DisplayContent(dataCar);
  
  Gestion.addPersonelManual(dataCar);

  Car.carousel();
  Car.active();

  Gestion.generateTablePersonnel(data);
  Gestion.autoGeneratePersonnel(data);
  Gestion.autoDistribution();
});

const Menu = {
  toogle: function () {
    $("body").on("click", "#btn-toogle-menu", function () {
      const $menu = $("#menu");
      $menu.toggleClass("d-none");
    });
  },
  showTextMenu: function () {
    $("body").on("mouseover", "#menu", function () {
      $this = $(this);
      var text = $(".toogle-text");
      text.remove("d-none");
    });
    $("body").on("mouseleave", "#menu", function () {
      $this = $(this);
      var text = $(".toogle-text");
      text.add("d-none");
    });
  },
};

const File = {
  upload: function () {
    $("body").on("change", "#file_upload", function () {
      const $this = $(this);
      const fileName = $("#file_name");
      const file = $this.prop("files")[0];

      fileName.val(file.name);

      const reader = new FileReader();
      reader.onload = function (event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        console.log(workbook);

        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const sheetData = XLSX.utils.sheet_to_html(firstSheet);

        $("#xlsxModalLabel").text(file.name);
        $("#fileContent").html(sheetData);
        $("#xlsxModal").modal("show");
      };
      reader.readAsArrayBuffer(file);
    });
  },
};

const Gestion = {
  autoGeneratePersonnel: function (data) {
    var $tablePersonel = $("#table-personnel");
    var dataTable = [
      //{card : html}
    ];

    data.forEach((element) => {
      const html = `
        <div class="position-relative rounded-4 p-3 mb-2" data-id="${element.id}">
            <h3 class="m-0 mb-2 p-0">${element.nom}</h3>
            <p class="opacity-50 mb-4">${element.adresse}</p>
            <span class="d-flex align-items-center gap-2">
                <p class="m-0 text-secondary fw-bold p-2 rounded-3" style="background: #F4F9FD;">106
                </p>
                <i class="bi bi-arrow-up fs-2 m-2 color-yellow"></i>
            </span>
        </div>
        `;
      dataTable.push({ card: html });
      $tablePersonel.bootstrapTable("load", dataTable);

      $("body").on(
        "change",
        "#personel-list input[type='checkbox']",
        function () {
          $this = $(this);
          var checkedLength = $(
            "#personel-list input[type='checkbox']:checked"
          ).length;
          $(".checked-lenght").text(checkedLength);
        }
      );
    });
  },

  addPersonelManual: function(car) {
    $("body").on("click", ".card-add-personel", function (e) {
      $this = $(this);
      let newElement = {};
      const target = $this.data("target");
      const idBlock = $this.data('id-block');
      $(target).modal("show");
      
      $('#table-list-personnel').on('check.bs.table', function(e,row, $element){
        newElement = row        
        const parent = $element.closest('tr');

        $('.add-maual-personnel').on('click', function() {
          const personnel = car.data.find(item => item.id == idBlock);

          if(personnel){
            personnel.personnel = newElement
          }

          $this.html(`
              <div class="card rounded-4 p-3 w-100" style="min-height: 140px;">
                  <h3 class="m-0 mb-2 p-0">${newElement.nom}</h3>
                  <p class="opacity-50">${newElement.adresse}</p>
                  <span class="d-flex align-items-center gap-1">
                      <p class="m-0 text-secondary fw-bold p-2 rounded-3"
                          style="background: #F4F9FD;">106
                      </p>
                      <i class="bi bi-arrow-up fs-4 color-yellow"></i>
                  </span>
              </div>
          `)
      

          $(target).modal('hide');      
          parent.addClass('use')          
        })
      })
        
    });
  },

  autoDistribution: function () {
    $("body").on("click", ".btn-auto-distribution", function () {
      $this = $(this);
      $target = $this.data("target");

      $($target).modal("show");
    });


    $('#table-personnel').on('check.bs.table', function() {
      $.confirm({
        title: 'Vous voulez ajoutez cette personne dans le voiture?',
        content: 'Confirmer',
        buttons: {
            confirm: {
              text: 'oui',
              btnClass: 'btn-primary',
              action: function(){
                // $.alert('confirmer');
              }
            },
            cancel: {
                text: 'Non',
                btnClass: 'btn-secondary',
                action: function(){
                    // $.alert('non');
                }
            }
        }
    });
    })
  },
  
  generateTablePersonnel: function(data) {
    $('.table-list-personnel').bootstrapTable('load', data)
  }
};

const Car = {
  carousel: function () {
    $("#cars").slick({
      dots: false,
      infinite: false,
      speed: 300,
      // slidesToShow: 4,
      // slidesToScroll: 4,

      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true,
      //     },
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //     },
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
      // ],
    });
  },

  active: function () {
    $("body").on("click", ".card-car", function () {
      $this = $(this);
      $(".card-car").removeClass("active-car");

      $this.addClass("active-car");
    });
  },

  headerDisplay: function (car) {
    const cars = $("#cars");
    const htmlCar = `
        <div class="col-12 col-md-3 mb-3" role="presentation">
            <button class="nav-link active bg-white rounded-5 p-1 w-100"
                id="v-pills-voiture1-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-voiture1" type="button" role="tab"
                aria-controls="v-pills-voiture1" aria-selected="true">

                <div class="p-2 px-3 rounded-5  card-car text-dark active-car"
                    style="background: #F4F9FD;">
                    <h4 class="m-0">${car.voiture}</h4>
                    <p>${car.trajet}</p>
                </div>

            </button>
        </div>
    `;
    cars.append(htmlCar);    
  },

  DisplayContent: function (car) {
    const carContents = $("#cars-contents");

    const driver = this.getDriver(car.data);
    const passages = this.getPassagers(car.data);

    carContents.append(`
      <div class="tab-pane fade show active" id="v-pills-voiture1" role="tabpanel" aria-labelledby="v-pills-voiture1-tab">
          <div class="row">
              ${driver}
              ${passages}
          </div>
      </div>            
    `);
  },

  getPassagers : function(data){
    let passages = data.filter(item => item.id != 'c');

    let cards = '';
    {passages.forEach((passage) => {
      if(passage.personnel == ''){
        htmlPersonnel = Templante.default(passage);
      }else{
        htmlPersonnel =  Templante.personel(passage);
      }
        cards += htmlPersonnel;
      })
      return cards;
    };
  },

  getDriver : function(data){
    const driver = data.find(item => item.id == 'c')?.personnel;
    if(driver == ''){
      html =Templante.default(driver.id);
    }else{
      html = Templante.driver(driver);
    }
    return html;
  }
};

const Templante =  {
  default : function(data){
    const html = `
      <div class="col-12 col-md-3 mb-3 card-add-personel " data-toggle="modal"
          data-target="#add-personel" data-id-block=${data.id}>
          
          <div class=" card rounded-4 p-3 w-100 d-flex justify-content-center align-items-center border-2 bg-transparent"
            style="min-height: 140px;  border-style:dashed;">
            <i class="bi me-2 bi-plus-lg fs-3 opacity-50"></i>
            <h4 class="m-0 mb-2 p-0 opacity-50">Ajout mauel</h4>
        </div>

      </div>
    `
    return html;
  },

  personel : function(data){
    const html =`
        <div class="col-12 col-md-3 mb-3 card-add-personel" data-toggle="modal"
            data-target="#add-personel" data-id-block=${data.id}>
            
            <div class="card rounded-4 p-3 w-100" style="min-height: 140px;">
                <h3 class="m-0 mb-2 p-0">${data.personnel.nom}</h3>
                <p class="opacity-50">${data.personnel.adresse}</p>
                <span class="d-flex align-items-center gap-1">
                    <p class="m-0 text-secondary fw-bold p-2 rounded-3"
                        style="background: #F4F9FD;">106
                    </p>
                    <i class="bi bi-arrow-up fs-4 color-yellow"></i>
                </span>
            </div>

        </div>`
    return html;
  },

  driver : function(driver){
    const html = `
    <div class="col-12 col-md-6 card-add-personel mb-3" data-toggle="modal" data-target="#add-personel">
        <div class="card rounded-4 p-3 w-100 d-flex flex-row justify-content-between align-items-center" style="min-height: 140px;">
            <div class="">
              <h3 class="m-0 mb-2 p-0">${driver.name}</h3>
              <p class="opacity-50">Chauffeur</p>
              <span class="d-flex align-items-center gap-1">
                  <p class="m-0 text-secondary fw-bold p-2 rounded-3"
                      style="background: #F4F9FD;">106
                  </p>
                  <i class="bi bi-arrow-up fs-4 color-yellow"></i>
                  <i class="bi bi-arrow-down fs-4 color-green"></i>
                </span>
            </div>
            <img src="./assets/image/volant.png" alt="" class="opacity-50"style="width: 100px; height: 100px;">
        </div>
      </div>`
    return html;
  }


}

