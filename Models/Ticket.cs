using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BookaFlight.Models
{
    public class Ticket
    {
        public int TicketID { get; set; }
        
        [ForeignKey("ApplicationUserId")]
        public virtual ApplicationUser User { get; set; }



        [Required(ErrorMessage = "This field is required.")]
        [Display(Name = "First Name: ")]
        public string FirstName { get; set; }

        //----------------

        [Required(ErrorMessage = "This field is required.")]
        [Display(Name = "Last Name: ")]
        public string LastName { get; set; }

        //----------------

        [Required(ErrorMessage = "This field is required.")]
        [Display(Name = "Date of Birth: ")]
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }

        //----------------

        [Display(Name = "Passport #: ")]
        public string PassportNumber { get; set; }


        // ----------------------------------


        [Required(ErrorMessage = "This field is required.")]
        [Display(Name = "Origin: ")]
        public string Origin { get; set; }

        //----------------

        [Display(Name = "Destination: ")]
        [Required(ErrorMessage = "This field is required.")]
        public string Destination { get; set; }

        //----------------

        [Display(Name = "Departure: ")]
        [Required(ErrorMessage = "This field is required.")]
        [DataType(DataType.Date)]
        public DateTime Departure { get; set; }

        //----------------

        [Display(Name = "Return: ")]
        [DataType(DataType.Date)]
        public DateTime Return { get; set; }

        //----------------

        [Required(ErrorMessage = "This field is required.")]
        [Display(Name = "Flight Number: ")]
        public string FlightNumber { get; set; }

        //----------------

        [ForeignKey("FlightID")]
        public virtual Flight Flight { get; set; }

        //--------------------------

        [Required(ErrorMessage = "This field is required.")]
        [Display(Name = "Free carry-on bag #: ")]
        public bool FreeCarryOnBag { get; set; }


        [Required(ErrorMessage = "This field is required.")]
        [Display(Name = "Trolley bag #: ")]
        public bool TrolleyBag { get; set; }


        [Required(ErrorMessage = "This field is required.")]
        [Display(Name = "Checked-in bag #: ")]
        public bool CheckedInBag { get; set; }
    }
}
