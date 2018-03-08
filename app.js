function convert() {
  var userInput = $("#user-input").val()
  var convertionUnitFrom = $("#units-from")[0].selectedIndex
  var convertionUnitTo = $("#units-to")[0].selectedIndex
  var display = $("#display");

  if (userInput == "") {
    alert("must type something in")
  }

  display.empty()
  
  switch (convertionUnitFrom) {
    case 0:
      byteConversion(userInput, convertionUnitTo)
      break
    case 1:
      kiloByteConversion(userInput, convertionUnitTo)
      break
    case 2:
      megaByteConversion(userInput, convertionUnitTo)
      break
    case 3:
      gigaByteConversion(userInput, convertionUnitTo)
      break
  }
}

function byteConversion(unitsNum, unitsTo) {
  switch (unitsTo) {
    case 0:
      display.innerHTML += unitsNum + " Byte";
      break
    case 1:
      display.innerHTML += (unitsNum / 1000) + " Kilobyte";
      break
    case 2:
      display.innerHTML += (unitsNum / 10000) + " Megabyte";
      break
    case 3:
      display.innerHTML += (unitsNum / 100000) + " Gigabyte";
      break
  }
}

function kiloByteConversion(unitsNum, unitsTo) {
  switch (unitsTo) {
    case 0:
      display.innerHTML += (unitsNum * 1000) + " Byte";
      break
    case 1:
      display.innerHTML += unitsNum + " Kilobyte";
      break
    case 2:
      display.innerHTML += (unitsNum / 1000) + " Megabyte"
      break
    case 3:
      display.innerHTML += (unitsNum / 10000) + " Gigabyte"
      break
  }
}

function megaByteConversion(unitsNum, unitsTo) {
  switch (unitsTo) {
    case 0:
      display.innerHTML += (unitsNum * 10000) + " Byte"
      break
    case 1:
      display.innerHTML += (unitsNum * 1000) + " Kilobyte"
      break
    case 2:
      display.innerHTML += unitsNum + " Megabyte"
      break
    case 3:
      display.innerHTML += (unitsNum / 1000) + " Gigabyte"
      break
  }
}

function gigaByteConversion(unitsNum, unitsTo) {
  switch (unitsTo) {
    case 0:
      display.innerHTML += (unitsNum * 100000) + " Byte"
      break
    case 1:
      display.innerHTML += (unitsNum * 10000) + " Kilobyte"
      break
    case 2:
      display.innerHTML += (unitsNum * 1000) + " Megabyte"
      break
    case 3:
      display.innerHTML += unitsNum + " Gigabyte"
      break
  }
}