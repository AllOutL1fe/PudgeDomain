using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Введите ваш логин")]
        public string Login { get; set; }

        [Required(ErrorMessage = "Введите ваш пароль")]
        [DataType(DataType.Password)]
        public string Password { get; set; }


        public bool RememberMe { get; set; }

        public string ReturnUrl { get; set; }
    }
}
