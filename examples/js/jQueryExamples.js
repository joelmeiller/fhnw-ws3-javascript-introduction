const loadJQueryExamples = function ($) {

    const runFirstExamples = () => {
        // Select DOM element
        const h1Element = $('h1')

        // Get the first element
        const firstElement = $('p').first()

        // Set text of element
        firstElement.text('jQuery changed me after clicking the button')

         // Create an element
        const textElement = $('<p>')

        // Set attribute for element
        textElement.attr("data-hook", "newText");

        // Set text to an element
        textElement.text('This is a new <p> element created by jQuery')

        // Append element to DOM
        $('body').append(textElement)
    };

    const runSecondExamples = () => {
        // Check if the element exists
        if ($('p#text').length > 0) {
            console.log('<p> Element exits')
        } else {
            console.log('No <p> Element found')
        }

        // Remove llst <p> element from DOM
        $('p#text').remove()
        
        // Append items with inner HTML content to a list
        const list = $('#list')
        const item = $('<li>')
        const itemContent = $('<h3>')
        itemContent.text('I am an Item Text')
        item.html(itemContent)
        list.append(item)

        // Access CSS Object Model and change styles
        $('h1').css('color', 'blue')
        $('h1').css('font-size', '72px')

        // Add a class to an object
        $('p[data-hook=newText]').last().addClass('mark-text');
    };

    // Litte animation based on jQuery functions
    const moveCircle = () => {
        $('#circleButton').off('click')

        console.log('Move Circle')
        
        const circle = $('#circle')
        moveElementRight(circle)
    }

    // Recursive functions to repaint the circles position after a short period of waiting
    const moveElementRight = element => {
        const position = element.offset()
        
        if (position.left > 900) {
            moveElementLeft(element)
        } else {
            setTimeout(() => {
                element.offset({ left: position.left + 20, top: position.top + 5 })
                moveElementRight(element)
            }, 50)
        }
    }

    const moveElementLeft = element => {
        const position = element.offset()
        
        if (position.left <= 600) {
            element.offset({ left: 600 })
            $('#circleButton').on('click', () => moveCircle())
        } else {
            setTimeout(() => {
                element.offset({ left: position.left - 20, top: position.top - 5 })
                moveElementLeft(element)
            }, 50)
        }
    }

    // Document Ready function
    $(document).ready(() => {    
        $('#activateButton1').on('click', () => runFirstExamples())
        $('#activateButton2').on('click', () => runSecondExamples())

        // Attach an event listener
        $('#circleButton').on('click', () => moveCircle())     
    });
};