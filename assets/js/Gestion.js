const Gestion = {
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

export default {Gestion};