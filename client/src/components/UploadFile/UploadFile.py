@use '../../partials/variables' as *;
@use '../../partials/colors' as *;
@use '../../partials/typography' as *;
@use '../../partials/mixins' as *;
.upload {
	margin-left: 9rem;
	@include tablet{
	position:absolute;
	top: 6rem;
	margin-left: 5rem;
   }
	display: flex;
	width: 100%;
	height: 90vh;
	background-color: #FFFFFF;
	@include h1-page-header;
	color: $slate;
	&__basicDna {
		margin-left: 300px;
	}
	&__inside {
		top: 150px;
		position: absolute;
		color: $text-grey;
	}
	&__subtitle {
		@include h1-page-header;
		color: $raspberrypi;
		@include increment-2-bottom;
		font-size: 30px;
		@include tablet{
		font-size: 45px;
		}
		
	}
	&__arrow {
		width: 1vw;
		padding-top: 2vw;
	}
	&__dna {
		padding-left: 25%;
	}
  &__title {
		font-size: 45px;
		@include tablet {
			color: $raspberrypi;
			font-size: 45px;
		}
	}
	&__title{
        @include h1-page-header;
        color: $raspberrypi;
        @include increment-2-bottom;
        font-size: 40px;
        @include tablet{
            font-size: 45px;
        }
    }
    &__arrow {
        width: 1vw;
        padding-top: 2vw;
    }

	&__about {
		padding-top: 1%;
		padding-left: 0.1rem;
		width: 95%;
		font-size: 18px;
		color: $text-grey;
		@include tablet {
			@include h1-main-header;
			color: $text-grey;
			width: 50%;
			font-size: 30px;
		}
		@include desktop {
			@include h1-main-header;
			font-size: 45px;
			color: $text-grey;
		}
	}

  &__progessBar{
    margin-top: 30px;
    height: 1rem;
    width: 0%;
    background-color: rgb(68, 212, 231);
    color: white;
    padding:2px
  }
}


/************************************HERO CONTAINER****************************/

.hero-container {
//	margin-top: 20%;
	display: flex;
	position: relative;
	background-image: url('../../assets/Icons/blacktree.svg');
	background-size: 150%;
	 ::before {
		content: "";
		position: absolute;
		top: 0rem;
		right: 0rem;
		bottom: 0rem;
		left: 0rem;
		z-index: -1;
	}
	@include tablet {
		height: 100%;
		width: 100%;
	}
	@include desktop {
		margin: 10.0rem 0; //160px
  
  }

}

.content {
	height: 1120px;
	font-size: 50px;
  //margin-top: 20px;
	position: relative;
	z-index: -1;
	background-image: url('../../assets/Icons/blacktree.svg');
	background-size: 150%;
}



.mod-button{
  height: 30px;
}