# 🖼️ Image Decoder App

This is a simple web-based application that allows users to input a Base64-encoded image string, decode it, display the image on the page, and copy the decoded image to the clipboard.

## 🔧 Features

- **Input Base64 String:** Allows users to input a Base64 string for an image.
- **Decode Image:** Decodes the Base64 string and displays the corresponding image on the page.
- **Copy Image to Clipboard:** Users can copy the decoded image to their clipboard for use elsewhere.
- **Validation:** Ensures that the input field is not empty before decoding.

## ⚙️ How It Works

- **Input Field:** The user provides a Base64-encoded image string in an input field.
- **Decode Button:** When clicked, it decodes the Base64 string and displays the image in an <img> element.
- **Copy Button:** After decoding the image, the user can click the "Copy Image" button to copy the image to their clipboard.
- **Error Handling:** If the input field is empty, an error message will be shown.

## 💻 Code Overview

This app uses vanilla JavaScript to process the Base64 image string, display the decoded image, and allow users to copy it to the clipboard.

**🔑 Key JavaScript Functions**

1. **proccessBase64Image(base64ImgString):**

   - Decodes the provided Base64 string and sets the decoded image as the source for the <img> element.
   - Handles errors if the Base64 string is invalid.

2. **Event Listeners:**
   - Blur Event on Input Field: Displays an error message if the input is empty.
   - **Click Event on Decode Button:** Decodes the image when the button is clicked. Displays an error message if the input is empty.
   - **Click Event on Copy Button: **Copies the decoded image to the clipboard as a PNG image.

## 📝 How to Use:

1. **Clone the Repository:**

   - one this repository to your local machine using git clone <repository_url>.

2. **Open the HTML File:**

   - Open the index.html file in any web browser to start using the app.

3. **Input Base64 String:**
   - Copy and paste your Base64-encoded image string into the input field.
   - Click the "Decode Image" button to display the image.
4. **Copy the Image:**
   - After the image is displayed, click the "Copy Image" button to copy the image to your clipboard

## 🛠️ Technologies Used

    HTML
    CSS
    Vanilla JavaScript

---

### 📋 License

This project is open-source and available under the MIT License.
