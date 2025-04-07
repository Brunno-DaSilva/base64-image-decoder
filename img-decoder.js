const base64ImgInput = document.getElementById("base64-image-input");
const decodeButton = document.getElementById("decode-button");
const inputError = document.getElementById("input-error");
const img = document.getElementById("face-image");
const copyButton = document.getElementById("copy-button");

const processBase64Image = (base64ImgString) => {
  try {
    if (!base64ImgString) {
      console.error("Base64 image data not found.");
      return;
    }
    if (base64ImgString) {
      img.src = `data:image/jpeg;base64,${base64ImgString}`;
    } else {
      console.error("Base64 image data not found.");
    }
  } catch (error) {
    console.error("Error displaying image:", error);
  }
};

base64ImgInput.addEventListener("blur", () => {
  if (!base64ImgInput.value.trim()) {
    inputError.style.display = "inline";
  } else {
    inputError.style.display = "none";
  }
});

decodeButton.addEventListener("click", () => {
  const value = base64ImgInput.value.trim();
  if (!value) {
    inputError.style.display = "inline";
    return;
  } else {
    inputError.style.display = "none";
    img.style.display = "block";
    proccessBase64Image(value);
  }
  proccessBase64Image(base64ImgInput.value.trim());
});

copyButton.addEventListener("click", () => {
  if (img.src) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    canvas.toBlob(function (blob) {
      const clipboardItem = new ClipboardItem({ "image/png": blob });
      navigator.clipboard
        .write([clipboardItem])
        .then(() => {
          alert("Image copied to clipboard!");
        })
        .catch((err) => {
          console.error("Error copying image: ", err);
        });
    });
  }
});
