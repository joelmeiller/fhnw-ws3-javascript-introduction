const loadScripts = function ($) {

    // Litte animation based on jQuery functions
    // REMARK: use jQuery animations instead https://api.jquery.com/animate/
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
        $('#circleButton').on('click', () => moveCircle())     
    });
};