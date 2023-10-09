const toastDangerTrigger = document.getElementById('dangerToastBtn')
const toastDanger = document.getElementById('dangerToast')
if (toastDangerTrigger) {
  toastDangerTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastDanger)

    toast.show()
  })
}
