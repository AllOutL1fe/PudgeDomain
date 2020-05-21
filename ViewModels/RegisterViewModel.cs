using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Введите вашу почту")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Введите ваш логин")]
        public string Login { get; set; }


        [Required(ErrorMessage = "Введите ваш пароль")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Введите ваш пароль")]
        [Compare("Password", ErrorMessage = "Пароли не совпадают")]
        [DataType(DataType.Password)]
        public string PasswordConfirm { get; set; }
    }
}
