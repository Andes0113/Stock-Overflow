﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace $safeprojectname$.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public User()
        {
        }
    }
}
