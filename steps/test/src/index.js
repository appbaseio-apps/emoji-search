function toggleMenu(e) {
  const navWrapperElement = document.getElementById("nav-wrapper");
  navWrapperElement.classList.toggle("show");
}

function mySearch(refArray, favNum) {
  if (Array.isArray(refArray) && refArray.length) {
    for (let index = 0; index < refArray.length; index++) {
      if (refArray[index] === favNum) {
        return true;
      }
    }

    return false;
  } else {
    return false;
  }
}

function mySearch2(refArray, favNum) {
  if (Array.isArray(refArray) && refArray.length) {
    const midIndex = Math.ceil(refArray.length / 2);
    if (refArray[midIndex] === favNum) {
      return true;
    } else if (refArray[midIndex] > favNum) {
      return mySearch2(refArray.slice(0, midIndex), favNum);
    } else {
      return mySearch2(refArray.slice(midIndex, refArray.length), favNum);
    }
  } else {
    return false;
  }
}

console.log(mySearch2([2, 3, 4, 6, 7, 8, 9, 44], 2));
