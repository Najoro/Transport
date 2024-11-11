$(document).ready(function () {
  Menu.toogle();
  Menu.showTextMenu();

  File.upload();

  //upload
  var data = [
      { id: 1, heure: "7h - 15h", name: "Ando", hotel: "Carlton", adresse: "23 rue de l'Indépendance", contact: "0345678901", point: "106" },
      { id: 2, heure: "8h - 14h", name: "Haja", hotel: "Ibis", adresse: "56 rue Razanamihaja", contact: "0346789012", point: "11" },
      { id: 3, heure: "9h - 13h", name: "Fara", hotel: "Hilton", adresse: "10 avenue de l’Université", contact: "0347890123", point: "12" },
      { id: 4, heure: "11h - 12h", name: "Voara", hotel: "Le Louvre", adresse: "78 rue d’Ambohitsirohitra", contact: "0348901234", point: "16" },
      { id: 5, heure: "12h - 13h", name: "Tahina", hotel: "Carlton", adresse: "34 rue du Commerce", contact: "0349012345", point: "26" },
      { id: 6, heure: "16h - 18h", name: "Solo", hotel: "Ibis", adresse: "12 rue de Mahamasina", contact: "0340123456", point: "136" },
      { id: 7, heure: "17h - 19h", name: "Lova", hotel: "Hilton", adresse: "89 avenue de l’Amitié", contact: "0341234567", point: "126" },
      { id: 8, heure: "17h - 19h", name: "Lova", hotel: "Hilton", adresse: "89 avenue de l’Amitié", contact: "0341234567", point: "6" },
      { id: 9, heure: "17h - 19h", name: "Lova", hotel: "Hilton", adresse: "89 avenue de l’Amitié", contact: "0341234567", point: "16" },
      { id: 10, heure: "17h - 19h", name: "Lova", hotel: "Hilton", adresse: "89 avenue de l’Amitié", contact: "0341234567", point: "306" },
      { id: 11, heure: "6h - 14h", name: "Zo", hotel: "Colbert", adresse: "1 avenue de l'Indépendance, Antananarivo", contact: "0342345678", point: "126" },
      { id: 12, heure: "7h - 15h", name: "Mamy", hotel: "Palissandre", adresse: "45 rue Ravelojaona, Tana", contact: "0343456789", point: "156" },
      { id: 13, heure: "8h - 16h", name: "Tina", hotel: "Grand Mellis", adresse: "12 rue d’Isoraka, Tana", contact: "0344567890", point: "56" },
      { id: 14, heure: "10h - 18h", name: "Rina", hotel: "Sole", adresse: "3 rue de Faravohitra, Antananarivo", contact: "0345678901", point: "66" },
      { id: 15, heure: "12h - 20h", name: "Fy", hotel: "A&C Hotel", adresse: "23 boulevard de l'Europe, Ivato", contact: "0346789012", point: "76" },
      { id: 16, heure: "14h - 22h", name: "Tsiry", hotel: "Sunny Garden", adresse: "56 avenue de l'Aviation, Ivandry", contact: "0347890123", point: "86" },
      { id: 17, heure: "16h - 23h", name: "Zo", hotel: "Calypso", adresse: "1 rue de l’Océan Indien, Toamasina", contact: "0348901234", point: "96" },
      { id: 18, heure: "18h - 2h", name: "Niry", hotel: "Pavillon de l’Emyrne", adresse: "14 rue Ravelojaona, Isoraka", contact: "0349012345", point: "26" },
      { id: 19, heure: "6h - 12h", name: "Hery", hotel: "Le Raphia", adresse: "2 rue Ratsimilaho, Fianarantsoa", contact: "0340123456", point: "66" },
      { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "36" }
  ];

  var cars = [
  {
    id: 1,
    name: "Voiture 1",
    route: "Analakely - Mahazo",
    data: [
      {place: 'c', personale: { id: 1, heure: "7h - 15h", name: "Ando", hotel: "Carlton", adresse: "23 rue de l'Indépendance", contact: "0345678901", point: "16" }, },
      {place: 'p1', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "16" }},
      {place: 'p2', personale: { id: 20, heure: "10h - 16h", name: "Koloina", hotel: "Les 3 Métis", adresse: "12 Avenue", contact: "0341234567", point: "16" }},
      {place: 'p3', personale: ""},
      {place: 'p4', personale: ""},
      {place: 'p5', personale: ""},
      {place: 'p6', personale: ""},
      {place: 'p7', personale: ""},
      {place: 'p8', personale: ""},
      {place: 'p9', personale: ""},
      {place: 'p10', personale: ""},
      {place: 'p11', personale: ""},
      {place: 'p12', personale: ""},
      {place: 'p13', personale: ""},
      {place: 'p14', personale: ""},
      {place: 'p15', personale: ""},
      {place: 'p16', personale: ""},
      {place: 'p17', personale: ""},
      {place: 'p18', personale: ""},
      {place: 'p19', personale: ""},
      {place: 'p20', personale: ""},
      {place: 'p21', personale: ""},
      {place: 'p22', personale: ""},
    ]
  },
  {
    id: 2,
    name: "Voiture 2",
    route: "Itaosy - Analakely",
    data: [
      {place: 'c', personale: { id: 1, heure: "7h - 15h", name: "Rojo", hotel: "Carlton", adresse: "23 rue de l'Indépendance", contact: "0345678901", point: "106" }, },
      {place: 'p1', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p2', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p3', personale:{ id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" } },
      {place: 'p4', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p5', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p6', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p7', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p8', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p9', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p10', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p11', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p12', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p13', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p14', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p15', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p16', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p17', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p18', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p19', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p20', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p21', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p22', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
    ]
  },
  {
    id: 3,
    name: "Voiture 3",
    route: "Anosy - Ankatso",
    data: [
      {place: 'c', personale: { id: 1, heure: "7h - 15h", name: "Toma", hotel: "Carlton", adresse: "23 rue de l'Indépendance", contact: "0345678901", point: "106" }, },
      {place: 'p1', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p2', personale: ""},
      {place: 'p3', personale: ""},
      {place: 'p4', personale: ""},
      {place: 'p5', personale: ""},
      {place: 'p6', personale: ""},
      {place: 'p7', personale: ""},
      {place: 'p8', personale: ""},
      {place: 'p9', personale: ""},
      {place: 'p10', personale: ""},
      {place: 'p11', personale: ""},
      {place: 'p12', personale: ""},
      {place: 'p13', personale: ""},
      {place: 'p14', personale: ""},
      {place: 'p15', personale: ""},
      {place: 'p16', personale: ""},
      {place: 'p17', personale: ""},
      {place: 'p18', personale: ""},
      {place: 'p19', personale: ""},
      {place: 'p20', personale: ""},
      {place: 'p21', personale: ""},
      {place: 'p22', personale: ""},
    ]
  },
  {
    id: 4,
    name: "Voiture 4",
    route: "67ha - Mahazo",
    data: [
      {place: 'c', personale: { id: 1, heure: "7h - 15h", name: "KOKO", hotel: "Carlton", adresse: "23 rue de l'Indépendance", contact: "0345678901", point: "106" }, },
      {place: 'p1', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p2', personale: ""},
      {place: 'p3', personale: ""},
      {place: 'p4', personale: ""},
      {place: 'p5', personale: ""},
      {place: 'p6', personale: ""},
      {place: 'p7', personale: ""},
      {place: 'p8', personale: ""},
      {place: 'p9', personale: ""},
      {place: 'p10', personale: ""},
      {place: 'p11', personale: ""},
      {place: 'p12', personale: ""},
      {place: 'p13', personale: ""},
      {place: 'p14', personale: ""},
      {place: 'p15', personale: ""},
      {place: 'p16', personale: ""},
      {place: 'p17', personale: ""},
      {place: 'p18', personale: ""},
      {place: 'p19', personale: ""},
      {place: 'p20', personale: ""},
      {place: 'p21', personale: ""},
      {place: 'p22', personale: ""},
    ]
  },
  {
    id: 5,
    name: "Voiture 5",
    route: "Tana - Fianara",
    data: [
      {place: 'c', personale: "", },
      {place: 'p1', personale: { id: 20, heure: "10h - 16h", name: "Kanto", hotel: "Les 3 Métis", adresse: "7 avenue  ", contact: "0341234567", point: "106" }},
      {place: 'p2', personale: ""},
      {place: 'p3', personale: ""},
      {place: 'p4', personale: ""},
      {place: 'p5', personale: ""},
      {place: 'p6', personale: ""},
      {place: 'p7', personale: ""},
      {place: 'p8', personale: ""},
      {place: 'p9', personale: ""},
      {place: 'p10', personale: ""},
      {place: 'p11', personale: ""},
      {place: 'p12', personale: ""},
      {place: 'p13', personale: ""},
      {place: 'p14', personale: ""},
      {place: 'p15', personale: ""},
      {place: 'p16', personale: ""},
      {place: 'p17', personale: ""},
      {place: 'p18', personale: ""},
      {place: 'p19', personale: ""},
      {place: 'p20', personale: ""},
      {place: 'p21', personale: ""},
      {place: 'p22', personale: ""},
    ]
  },
  ]
  
  Car.active();
  Car.dynamicHeader(cars);
  Car.dynamicContent(cars);
  Car.carousel();
  
  Personnel.autoDistribution();
  Personnel.addManual(cars);
  Personnel.generateTable(data);
  Personnel.autoGenerate(data);
  Personnel.addIfChecked(data, cars);
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

const Personnel = {
  autoGenerate: function (data) {
    var $tablePersonel = $("#table-personnel");
    var dataTable = [
      //{card : html}
    ];

    data.forEach((element) => {
      const html = `
        <div class="position-relative rounded-4 p-3 mb-2" data-id="${element.id}">
            <h3 class="m-0 mb-2 p-0">${element.name}</h3>
            <p class="opacity-50 mb-4">${element.adresse}</p>
            <span class="d-flex align-items-center gap-2">
                <p class="m-0 text-secondary fw-bold p-2 rounded-3" style="background: #F4F9FD;">${element.point}
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

  addManual: function (cars) {
    $("body").on("click", ".card-add-personel", function () {
      $this = $(this);
      let newElement = {};
      // const carId = $this.parent().data('car-id');
      // const carPlace = $this.data('id-block');
      const target = $this.data("target");
      const $table = $("#table-list-personnel");
      
      //afficher le modale
      $(target).modal("show");
      console.log();
      

      //envenement checked de bootstrap-table
      $table.on("check.bs.table", function (e, row, $element) {
        newElement = row;

        //si le btn du modale est clicker
        $(".add-maual-personnel").on("click", function () {
          if($this.hasClass('is-driver')){
            $this.html(Templante.newElementDriver(newElement));
          }else{
            $this.html(Templante.newElementPeronnel(newElement));
          }
          console.log(cars);
          
          //cache le modale
          $(target).modal("hide");
          
          //decocher l'element du depart
          const index = $("#table-personnel").bootstrapTable("getData").indexOf(row);
          $table.bootstrapTable("uncheck", index);
        });
      });
    });
  },

  autoDistribution: function () {
    $("body").on("click", ".btn-auto-distribution", function () {
      $this = $(this);
      $target = $this.data("target");

      $($target).modal("show");
    });
  },

  addIfChecked : function(dataPersonnel, cars) {
    $table = $("#table-personnel");
  
    
    $table.on("check.bs.table", function (e, row, $element) {

      const index = $("#table-personnel").bootstrapTable("getData").indexOf(row);
      const rowChecked = $element.closest("tr").find('div');
      const personnelInsert = dataPersonnel.find((item) => item.id == rowChecked.data('id'));
      
      let carId = "";
      let place = "";
      let radioInputs = "";
      let carIdentify = "";
      
      for (const car of cars) {
        const identify = `${car.name.split(" ").join("-")}-${car.id}`
        radioInputs += `<label><input type="radio" name="option" value="#${identify}" data-id="${car.id}" class="option-radio "> ${car.name}</label><br>`
      }
      $.confirm({
        title: "Vous voulez ajoutez dans quelle voiture?",
        type: 'blue',
        content:`
        <form id="popupForm">
          <div class="form-group form-control">
            ${radioInputs}
          </div>
        </form>`,
        onContentReady: function () {
          // Action lorsque l'option radio est sélectionnée
          $('.option-radio').change(function() {
            carIdentify = $(this).val();
            carId = $(this).data('id');
          });
        },
        buttons: {
          confirm: {
            text: "oui",
            btnClass: "btn-primary",
            action: function () {
              currentCar = cars.find(item => item.id === carId);
              console.log(currentCar);
              
              for (const dt of currentCar.data) {
                if(dt.place =="p22" && dt.personale != ""){
                    $.alert({
                      title: 'Voiture Plein',
                      content: 'Ce voiture est plein',
                      type:"red"
                  });
                  break;
                }
                if(dt.place != "c" && dt.personale == ""){
                  dt.personale = personnelInsert;
                  place = dt.place;
                  break;
                }
              }
              const placeWrapper = $(`${carIdentify} div[data-id-block="${place}"]`)  
              placeWrapper.html(Templante.newElementPeronnel(personnelInsert))
              $table.bootstrapTable("uncheck", index);
            },
          },
          cancel: {
            text: "Non",
            btnClass: "btn-secondary",
            action: function () {
              $table.bootstrapTable("uncheck", index);
            },
          },
        },
      });
      
    });
  },

  generateTable: function (data) {
    $(".table-list-personnel").bootstrapTable("load", data);
  },
};

const Car = {
  carousel: function () {
    $("#cars").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  },

  active: function () {
    $("body").on("click", ".card-car", function () {
      $this = $(this);
      const content = $this.parent().data('bs-target');
      
      $(content).addClass('show active');
      $(".card-car").removeClass("active-car");

      $this.addClass("active-car");
    });
  },

  dynamicHeader: function(cars) {
    const $cars = $('#cars');

    cars.forEach((car,index) => {
      var active = '';
      var activeCar = '';
      var selected = false;
      const identify = `${car.name.split(" ").join("-")}-${car.id}`
      

      if(index == 0){
        active ="active";
        selected = true;
        activeCar = "active-car";
      }
      
      $cars.append(` 
      <!--Voiture ${car.id}-->
      <div class="col-12 col-md-3 mb-3" role="presentation">

          <button class="nav-link bg-white rounded-5 p-1 w-100 ${active}" id="v-pills-${identify}-tab" 
              data-bs-toggle="pill" data-bs-target="#v-pills-${identify}" type="button" 
              role="tab" aria-controls="v-pills-${identify}" aria-selected="${selected}">
              <div class="p-2 px-3 rounded-5 card-car text-dark ${activeCar}"
                  style="background: #F4F9FD;">
                  <h4 class="m-0">${car.name}</h4>
                  <p>${car.route}</p>
              </div>
          </button>

      </div>`)

    })
  },

  dynamicContent: function(cars) {
    const $carContent = $('#cars-contents');
    cars.forEach((car,index) => {
      var data = car.data;
      var defaulteTemplante = '';
      var TemplanteDriver = '';
      var showContent = (index == 0) ? "show active" : "";
      const identify = `${car.name.split(" ").join("-")}-${car.id}`
      

      data.forEach(element => {
        if(element.place == 'c'){
          TemplanteDriver = (element.personale == "") ? Templante.defaultDriver(element) : Templante.driver(element);
        }else{
          defaulteTemplante +=(element.personale == "") ?Templante.default(element) : Templante.personel(element);
        }

      });

      $carContent.append(`
        <!-- Contenu Voiture 1 -->
        <div class="tab-pane fade ${showContent} car-content" id="v-pills-${identify}" role="tabpanel" aria-labelledby="v-pills-${identify}-tab">
            <div class="row" id="${identify}" data-car-id="${car.id}">
              ${TemplanteDriver}
              ${defaulteTemplante}
            </div>
        </div>  
      `);

    })
  }

};

const Templante = {
  default: function (data) {    
    const html = `
      <div class="col-12 col-md-3 mb-3 card-add-personel " data-toggle="modal"
          data-target="#add-personel" data-id-block="${data.place}">
          
          <div class=" card rounded-4 p-3 w-100 d-flex justify-content-center align-items-center border-2 bg-transparent"
            style="min-height: 140px;  border-style:dashed;">
            <i class="bi me-2 bi-plus-lg fs-3 opacity-50"></i>
            <h4 class="m-0 mb-2 p-0 opacity-50">Ajout mauel</h4>
        </div>

      </div>
    `;
    return html;
  },

  personel: function (data) {
    const html = `
        <div class="col-12 col-md-3 mb-3 card-add-personel" data-toggle="modal"
            data-target="#add-personel" data-id-block=${data.place}>
            
            <div class="card rounded-4 p-3 w-100" style="min-height: 140px;">
                <h3 class="m-0 mb-2 p-0">${data.personale.name}</h3>
                <p class="opacity-50">${data.personale.adresse}</p>
                <span class="d-flex align-items-center gap-1">
                    <p class="m-0 text-secondary fw-bold p-2 rounded-3"
                        style="background: #F4F9FD;">${data.personale.point}
                    </p>
                    <i class="bi bi-arrow-up fs-4 color-yellow"></i>
                </span>
            </div>

        </div>`;
    return html;
  },

  newElementPeronnel : function(newElement) {
    const html = `
      <div class="card rounded-4 p-3 w-100" style="min-height: 140px;">
          <h3 class="m-0 mb-2 p-0">${newElement.name}</h3>
          <p class="opacity-50">${newElement.adresse}</p>
          <span class="d-flex align-items-center gap-1">
              <p class="m-0 text-secondary fw-bold p-2 rounded-3"
                  style="background: #F4F9FD;">${newElement.point}
              </p>
              <i class="bi bi-arrow-up fs-4 color-yellow"></i>
          </span>
      </div>
    `
    return html;
  },
  newElementDriver : function(newElement) {
    const html = `
       <div class="card rounded-4 p-3 w-100 d-flex flex-row justify-content-between align-items-center" style="min-height: 140px;">
            <div class="">
              <h3 class="m-0 mb-2 p-0">${newElement.name}</h3>
              <p class="opacity-50">Chauffeur</p>
              <span class="d-flex align-items-center gap-1">
                  <p class="m-0 text-secondary fw-bold p-2 rounded-3"
                      style="background: #F4F9FD;">${newElement.point}
                  </p>
                  <i class="bi bi-arrow-up fs-4 color-yellow"></i>
                  <i class="bi bi-arrow-down fs-4 color-green"></i>
                </span>
            </div>
            <img src="./assets/image/volant.png" alt="" class="opacity-50"style="width: 100px; height: 100px;">
        </div>
    `
    return html;
  },
  driver: function (data) {
    const personale = data.personale;
    
    const html = `
    <div class="col-12 col-md-6 card-add-personel mb-3" data-toggle="modal" data-target="#add-personel" data-id-block="${data.place}">
        <div class="card rounded-4 p-3 w-100 d-flex flex-row justify-content-between align-items-center" style="min-height: 140px;">
            <div class="">
              <h3 class="m-0 mb-2 p-0">${personale.name}</h3>
              <p class="opacity-50">Chauffeur</p>
              <span class="d-flex align-items-center gap-1">
                  <p class="m-0 text-secondary fw-bold p-2 rounded-3"
                      style="background: #F4F9FD;">${personale.point}
                  </p>
                  <i class="bi bi-arrow-up fs-4 color-yellow"></i>
                  <i class="bi bi-arrow-down fs-4 color-green"></i>
                </span>
            </div>
            <img src="./assets/image/volant.png" alt="" class="opacity-50"style="width: 100px; height: 100px;">
        </div>
      </div>`;
    return html;
  },
  defaultDriver: function (data) {
    const html = `
     <div class="col-12 col-md-6 mb-3 card-add-personel is-driver" data-toggle="modal"
          data-target="#add-personel" data-id-block="${data.place}">
          
          <div class=" card rounded-4 p-3 w-100 d-flex justify-content-center align-items-center border-2 bg-transparent"
            style="min-height: 140px;  border-style:dashed;">
            <i class="bi me-2 bi-plus-lg fs-3 opacity-50"></i>
            <h4 class="m-0 mb-2 p-0 opacity-50">Ajout mauel</h4>
        </div>

      </div>`

    return html;
  },
};
