# Modal Library

A reusable JavaScript modal library built from scratch.

This project allows developers to create different types of modals dynamically using a JavaScript class. The library handles the common modal structure, closing behaviour, and type-specific modal content.

## Features

* Basic content modal
* Alert modal
* Confirmation modal
* Form modal
* Image modal
* Close button configuration
* Close modal by clicking the overlay
* Close modal using the Escape key
* Custom modal titles and content
* Custom confirmation button text
* Dynamic form generation
* Integration with a custom Form Validation plugin

## Project Structure

```text
modal-project/
│
├── index.html
├── script/
│   └── modal.js
├── style/
│   └── style.css
├── img/
│   └── alert.png
└── README.md
```

## Modal Types

### Basic Modal

Displays a title, content, and action button.

```js
const modal = new modal(
    "basic",
    "Welcome",
    "This is a basic modal.",
    true,
    true,
    true,
    ".modal-overlay"
);

modal.Init();
```

### Alert Modal

Displays an alert message with an alert icon.

```js
const modal = new modal(
    "alert",
    "Warning",
    "Something requires your attention.",
    true,
    true,
    true,
    ".modal-overlay"
);

modal.Init();
```

### Confirm Modal

Displays two configurable action buttons.

```js
const modal = new modal(
    "confirm",
    "Delete Item",
    "Are you sure you want to delete this item?",
    true,
    true,
    true,
    ".modal-overlay",
    {
        confirm: {
            not_confirm: "Cancel",
            confirm: "Delete"
        }
    }
);

modal.Init();
```

### Form Modal

Generates a form dynamically inside the modal.

The form can be configured using field definitions and validation rules.

Example configuration:

```js
{
    form: {
        id: "registration-form",

        fields: [
            {
                label: "Username",
                type: "text",
                id: "username",
                name: "username",
                placeholder: "Enter username",
                required: true
            },
            {
                label: "Email",
                type: "email",
                id: "email",
                name: "email",
                placeholder: "Enter email",
                required: true
            }
        ],

        rules: {
            username: {},
            email: {}
        }
    }
}
```

The generated form can be validated using the custom Form Validation plugin.

### Image Modal

Displays an image inside the modal.

```js
const modal = new modal(
    "image",
    "",
    "",
    true,
    true,
    true,
    ".modal-overlay",
    {
        image: {
            src: "../img/example.jpg",
            alt: "Example image"
        }
    }
);

modal.Init();
```

## Configuration

The modal constructor accepts the following parameters:

| Parameter         | Description                           |
| ----------------- | ------------------------------------- |
| `type`            | Type of modal                         |
| `title`           | Modal title                           |
| `content`         | Modal content                         |
| `showCloseButton` | Show or hide the close button         |
| `closeOnOverlay`  | Close when clicking outside the modal |
| `closeOnEscape`   | Close when Escape key is pressed      |
| `container`       | Modal overlay container selector      |
| `options`         | Type-specific configuration           |

## Available Modal Types

```text
basic
alert
confirm
form
image
```

## Modal Behaviour

### Close Button

```js
showCloseButton: true
```

Displays the close button.

### Close on Overlay

```js
closeOnOverlay: true
```

Allows the modal to close when clicking outside the modal box.

### Close on Escape

```js
closeOnEscape: true
```

Allows the modal to close when the Escape key is pressed.

## Architecture

```text
Modal Class
│
├── Init()
│
├── createModal()
│   ├── Creates common modal structure
│   └── Selects modal type
│
├── createBasic()
│
├── createAlert()
│
├── createConfirm()
│
├── createForm()
│
├── createImage()
│
├── closePopup()
│   ├── Close button
│   ├── Overlay click
│   └── Escape key
│
└── close()
```

## Form Validation Integration

The Form Modal is designed to work with a separate Form Validation plugin.

The workflow is:

```text
Modal Library
      ↓
Create Form Modal
      ↓
Generate Form Fields
      ↓
Insert Form into DOM
      ↓
Initialize Form Validation Plugin
      ↓
Validate Form Fields
```

This keeps modal functionality and form validation as separate reusable components.

## Technologies Used

* HTML
* CSS
* Vanilla JavaScript
* ES6 Classes
* JavaScript Modules

## Future Improvements

* Modal animations
* Focus trapping
* Accessibility improvements
* Multiple modal support
* Custom button callbacks
* Form submission callbacks
* Video modal support
* Side drawer modal
* Fullscreen modal
* Destroy modal method
* Custom themes

## Author

Sutheerth
