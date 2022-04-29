$(document).ready(function() {		
	$("a[name='linkRemoveDetail']").each(function(index) {
		$(this).click(function() {
			removeDetailSectionByIndex(index);
		});
	});
	
});

function addNextDetailSection() {
	allDivDetails = $("[id^='divDetail']");
	divDetailsCount = allDivDetails.length;
   
	
	htmlDetailSection = `
        <div class="row mt-3" id="divDetail${divDetailsCount}">
            <div class="col-12 col-sm-5">
                <label>Name</label>
                <input class="multisteps-form__input form-control" type="text"
                name="detailNames"
                maxlength="255" />
            </div>
            <div class="col-12 col-sm-5">
                <label>Value</label>
                <input class="multisteps-form__input form-control" type="text"
                    name="detailValues"
                    maxlength="255" />
            </div>

            <div id="replace-btn" class="col-12 col-sm-1" style="padding-top: 30px;">
                               
            </div>
        </div>
	`;
	
	$("#divProductDetails").append(htmlDetailSection);

	previousDivDetailSection = allDivDetails.last();
	previousDivDetailID = previousDivDetailSection.attr("id");
	 	
	htmlLinkRemove = `
        <div class="col-12 col-sm-1" style="padding-top: 30px;">
            <a title="Remove this detail" href="javascript:removeDetailSectionById('${previousDivDetailID}')">
                <i class="fa-solid fa-trash-can" style="font-size: 26px;"></i>
            </a>
        </div>
	`;
	
    $("#replace-btn").remove();
	previousDivDetailSection.append(htmlLinkRemove);
	
	$("input[name='detailNames']").last().focus();
}

function removeDetailSectionById(id) {
	$("#" + id).remove();
}

function removeDetailSectionByIndex(index) {
	$("#divDetail" + index).remove();	
}