var extraImagesCount = 0;

$(document).ready(function () {
  $("#fileImage").change(function () {
    fileSize = this.files[0].size;

    if (fileSize > 502400) {
      this.setCustomValidity("You must choose an image less than 500KB !");
      this.reportValidity();
    } else {
      this.setCustomValidity("");
      showImageThumbnail(this);
    }
  });

  $("input[name='extraImage']").each(function (index) {
    extraImagesCount++;
    $(this).change(function () {
      fileSize = this.files[0].size;
      if (fileSize > 502400) {
        this.setCustomValidity("You must choose an image less than 500KB !");
        this.reportValidity();
      } else {
        showExtrasImageThumbnail(this, index);
      }
    });
  });

  $("a[name='linkRemoveExtraImage']").each(function (index) {
    $(this).click(function () {
      removeExtraImage(index);
    });
  });
  
});

function showImageThumbnail(fileInput) {
  var file = fileInput.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    $("#thumbnail").attr("src", e.target.result);
    $("#imagePreview").hide();
    $("#imagePreview").fadeIn(650);
  };
  reader.readAsDataURL(file);
}

function showExtrasImageThumbnail(fileInput, index) {
  var file = fileInput.files[0];

  fileName = file.name;
  imageNameHiddenField = $("#imageName" + index);
  if (imageNameHiddenField.length) {
    imageNameHiddenField.val(fileName);
  }

  var reader = new FileReader();
  reader.onload = function (e) {
    $("#extraThumbnail" + index).attr("src", e.target.result);
    $("#imagePreview").hide();
    $("#imagePreview").fadeIn(650);
  };
  reader.readAsDataURL(file);
  if (index >= extraImagesCount - 1) {
    addNextExtraImageSection(index + 1);
  }
}

function addNextExtraImageSection(index) {
  htmlExtraImage = `
            <div class="col-lg-4" id="divExtraImage${index}">
              <div class="card h-100">
                  <div class="card-body pos-relative">
                      <h5 class="font-weight-bolder">Extra Image #${
                        index + 1
                      }</h5>
                      <div class="row">
                          <div class="col-12">
                              <img class="w-100 border-radius-lg shadow-lg mt-3 size-image-content"
                                  id="extraThumbnail${index}"
                                  src="${defaultImageThumbnailSrc}"
                                  alt="Extra image #${index + 1} preview">
                          </div>
                          <div class="col-12 mt-5">
                              <div class="d-flex">
                                  <input type="file" style="display: none;" id="extraImage${index}"  name="extraImage" 
                                  accept="image/png ,image/jpeg" 
                                  onchange="showExtrasImageThumbnail(this, ${index})"
                                  class=""/>
                                  <label class="btn btn-primary btn-sm mb-0 me-2"  for="extraImage${index}">
                                      Edit
                                  </label>
                                  <button class="btn btn-outline-dark btn-sm mb-0" type="button"
                                      name="button">Remove</button>
                              </div>
                          </div>
                      </div>
                      <div id="extraImageHeader${index}" class="btn-close-position">
                                            
                      </div>
                  </div>
              </div>
            </div>
        `;

  htmlLinkRemove = `
          <a href="javascript:removeExtraImage(${
            index - 1
          })" class="btn-closes btn-close-form" title="Remove this image">
              <span class="icon-cross"></span>
              <span class="visually-hidden">Close</span>
          </a>
        `;

  $("#divProductImages").append(htmlExtraImage);

  $("#extraImageHeader" + (index - 1)).append(htmlLinkRemove);

  extraImagesCount++;
}

function removeExtraImage(index) {
  $("#divExtraImage" + index).remove();
}

function showModalNotification(title, message) {
  $("#modal-title-notification").text(title);
  $("#modal-body-notification").text(message);
  $("#modal-notification").modal("show");
}

function showErrorModal(message) {
  showModalNotification("Error", message);
}

function showWarningModal(message) {
  showModalNotification("Warning", message);
}
