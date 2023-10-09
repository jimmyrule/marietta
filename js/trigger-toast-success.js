const toastSuccessTrigger = document.getElementById('successToastBtn')
const toastSuccess = document.getElementById('successToast')
if (toastSuccessTrigger) {
  toastSuccessTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastSuccess)

    toast.show()
  })
}
