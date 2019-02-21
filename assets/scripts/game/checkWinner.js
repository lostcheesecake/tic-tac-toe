const checkForWinner = () => {
  const cell0 = $('#board tr:nth-child(1) td:nth-child(1)').text()
  const cell1 = $('#board tr:nth-child(1) td:nth-child(2)').text()
  const cell2 = $('#board tr:nth-child(1) td:nth-child(3)').text()
  const cell3 = $('#board tr:nth-child(2) td:nth-child(1)').text()
  const cell4 = $('#board tr:nth-child(2) td:nth-child(2)').text()
  const cell5 = $('#board tr:nth-child(2) td:nth-child(3)').text()
  const cell6 = $('#board tr:nth-child(3) td:nth-child(1)').text()
  const cell7 = $('#board tr:nth-child(3) td:nth-child(2)').text()
  const cell8 = $('#board tr:nth-child(3) td:nth-child(3)').text()

  if ((cell0 === cell1) && (cell3 === cell4)) { return cell2 } else if
  ((cell3 === cell4) && (cell4 === cell5)) { return cell5 } else if
  ((cell6 === cell7) && (cell7 === cell8)) { return cell8 } else if
  ((cell0 === cell3) && (cell3 === cell6)) { return cell6 } else if
  ((cell1 === cell4) && (cell4 === cell7)) { return cell7 } else if
  ((cell2 === cell5) && (cell5 === cell8)) { return cell8 } else if
  ((cell0 === cell4) && (cell4 === cell8)) { return cell8 } else if
  ((cell2 === cell4) && (cell4 === cell6)) { return cell6 }
  return -1
}

module.exports = checkForWinner
