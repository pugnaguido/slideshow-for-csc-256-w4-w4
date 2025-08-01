
        //create an array to hold theimage locations.
        let arrImages = [
            "./images/cat1.jpg",
            "./images/cat2.jpg",
            "./images/cat3.jpg",
            "./images/cat4.jpg"
            
        ];
        // the first image is at index 0 so we will start there
        let iCurrentSlide = 0;


//create a function display teh selected image
function displaySlideshowImage(iImgLocation){

    //set up a nickname/shortcut to access the html image element that is going to hold the slideshow
    let imgElement = document.getElementById("imgSlide");
    //set the img source for the slideshow to the index of the image array that was passed into the funciton.
    imgElement.src = arrImages[iImgLocation];
    
}


//function to navigate to the previouse slide
function previouseSlide(){
    //navigate to the previouse slide by subtracting 1 from the current slide counter
    iCurrentSlide = iCurrentSlide -1;
    //equivalent to iCurrentSlide--
 //check to see if we have an index less than 0 if so i watn to loop it back around to the last image in the array
    if (iCurrentSlide < 0){
        iCurrentSlide = arrImages.length - 1;
    }
    //call the funciton to swap out the image with whatever one is chosen in out index.
    displaySlideshowImage(iCurrentSlide);
}
//function to navigate to the next slide
function nextSlide(){
    //navigate tothe next slide by adding 1
    iCurrentSlide = iCurrentSlide + 1;

    //chek if the current slid eindex is now out of bounds - is it equal to the lenth of the array
    if( iCurrentSlide == arrImages.length){
        // you could stay here - iCurrentslide = arrImages.length - 1;
        //to loop around change the index to 0
        iCurrentSlide = 0;// show the first lside
    }

    //call the funciton to swap out ht eimage with whatever our index is.
    displaySlideshowImage(iCurrentSlide);
}
    //load the first image when teh page loads
    displaySlideshowImage(iCurrentSlide);
