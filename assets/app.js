// import Gestion from "./js/Gestion";

$(document).ready(function(){
    Menu.toogle();
    Menu.showTextMenu();

    File.upload();
    
    //upload
    var data = [
        {date: '7h - 15h', hotel: 'Carlton', nom: 'Ando', adresse: '23 rue de l’Indépendance', contact: '0345678901'},
        {date: '8h - 14h', hotel: 'Ibis', nom: 'Haja', adresse: '56 rue Razanamihaja', contact: '0346789012'},
        {date: '9h - 13h', hotel: 'Hilton', nom: 'Fara', adresse: '10 avenue de l’Université', contact: '0347890123'},
        {date: '11h - 12h', hotel: 'Le Louvre', nom: 'Voara', adresse: '78 rue d’Ambohitsirohitra', contact: '0348901234'},
        {date: '12h - 13h', hotel: 'Carlton', nom: 'Tahina', adresse: '34 rue du Commerce', contact: '0349012345'},
        {date: '16h - 18h', hotel: 'Ibis', nom: 'Solo', adresse: '12 rue de Mahamasina', contact: '0340123456'},
        {date: '17h - 19h', hotel: 'Hilton', nom: 'Lova', adresse: '89 avenue de l’Amitié', contact: '0341234567'}
    ]
    Gestion.carCarousel();
    Gestion.carActive();
    Gestion.autoGeneratePersonnel(data);
    Gestion.addPersonelManual();
    Gestion.autoDistribution();
    
})

const Menu = {
    toogle : function() {
        $('body').on('click','#btn-toogle-menu', function() {
           const $menu = $('#menu');
           $menu.toggleClass('d-none');
        })
    },
    showTextMenu: function() {
        $('body').on('mouseover','#menu',function(){
            
            $this = $(this);
            var text = $('.toogle-text');
            text.remove('d-none')
        })
        $('body').on('mouseleave','#menu',function(){

            $this = $(this);
            var text = $('.toogle-text');
            text.add('d-none')
        })
    }
}

const File = {
    upload : function() {
        $('body').on('change','#file_upload', function() {
            const $this = $(this);
            const fileName = $('#file_name');
            const file = $this.prop('files')[0]
            
            fileName.val(file.name);

        const reader = new FileReader();
        reader.onload = function (event) {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            console.log(workbook);
            
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const sheetData = XLSX.utils.sheet_to_html(firstSheet);
            
            $('#xlsxModalLabel').text(file.name);
            $('#fileContent').html(sheetData);
            $('#xlsxModal').modal('show');
        };
        reader.readAsArrayBuffer(file);
            
        })
    }
}


const Gestion = {
    carCarousel : function(){
        $("#cars").slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            // prevArrow: '<button class="btn btn-primary"><i class="fa fa-chevron-left"></i></button>',
            // nextArrow: '<button class="btn btn-primary slick-btn-next"><i class="fa fa-chevron-right"></i></button>',

            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
        
    },
    // carActive : function() {
        
    //     $('body').on('click', '.car', function() {
    //         alert('test')
            
    //         // $('.car').removeClass('active-car');
    //         // $(this).addClass('active-car');
    //     })
    // },

    autoGeneratePersonnel : function(data) {
       const listPersonel = $('#personel-list');

       data.forEach((element,key) => {
            const html = `
                <div class="card position-relative rounded-4 p-3 mb-2">
                    <label for="listPersonnel_${key}">
                        <h3 class="m-0 mb-2 p-0">${element.nom}</h3>
                        <p class="opacity-50 mb-4">${element.adresse}</p>
                        <span class="d-flex align-items-center gap-2">
                            <p class="m-0 text-secondary fw-bold p-2 rounded-3" style="background: #F4F9FD;">106
                            </p>
                            <i class="bi bi-arrow-up fs-2 m-2 color-yellow"></i>
                        </span>
                    </label>
                    <span class="position-absolute" style="top: 10px; right:10px;">
                        <input type="checkbox" name="listPersonnel_${key}" id="listPersonnel_${key}">
                    </span>
                </div>
            `
            listPersonel.append(html);
        });

        $('body').on('change', "#personel-list input[type='checkbox']", function() {
            $this = $(this);
            var checkedLength = $("#personel-list input[type='checkbox']:checked").length;
            $('.checked-lenght').text(checkedLength);
        })
    },

    addPersonelManual : function(){
        $('body').on('click','.card-add-personel', function() {
            $this = $(this);
            $target = $this.data('target');
            
            $($target).modal('show');
            
        })    
    },

    autoDistribution : function() {
        $('body').on('click', '.btn-auto-distribution', function() {
            $this = $(this);
            $target = $this.data('target');
            
           $($target).modal('show');
        })
    }
}