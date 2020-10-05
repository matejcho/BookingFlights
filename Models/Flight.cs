using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookaFlight.Models
{
    public class Flight
    {
        public int FlightID { get; set; }
        

        [Required(ErrorMessage = "This field is required.")]
        [Display(Name = "Origin: ")]
        public string Origin { get; set; }


        [Display(Name = "Destination: ")]
        [Required(ErrorMessage = "This field is required.")]
        public string Destination { get; set; }


        [Display(Name = "Departure: ")]
        [Required(ErrorMessage = "This field is required.")]
        [DataType(DataType.Date)]
        public DateTime Departure { get; set; }


        [Display(Name = "Return: ")]
        [DataType(DataType.Date)]
        public DateTime Return { get; set; }

        [Required(ErrorMessage = "This field is required.")]
        [Display(Name = "Flight Number: ")]
        public string FlightNumber { get; set; }

        public virtual ICollection<ApplicationUser> Passengers { get; set; }
    }
}
