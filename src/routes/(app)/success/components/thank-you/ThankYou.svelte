<style>
	/* https://codepen.io/yemon/pen/YraNLQ */
	@import url('https://fonts.googleapis.com/css?family=Comfortaa:700|Roboto:900|Russo+One');

	.heart {
		color: #fff;
		position: fixed;
		animation: heart 5s linear infinite;
		margin-left: -30px;
		/* optical correction */
	}

	.text {
		margin-left: -30px;
		/* optical correction */
	}

	:global(.dark .text p) {
		color: #fff;
	}
	p {
		width: 45px;
		display: inline-block;
		font-size: 0px;
		font-family: 'Russo One';
		font-weight: 900;
		color: black;
	}

	p:nth-child(1) {
		animation: showup 5s infinite 0.2s;
	}

	p:nth-child(2) {
		animation: showup 5s infinite 0.4s;
	}

	p:nth-child(3) {
		animation: showup 5s infinite 0.6s;
	}

	p:nth-child(4) {
		animation: showup 5s infinite 0.8s;
	}

	p:nth-child(5) {
		animation: showup 5s infinite 1s;
	}

	p:nth-child(6) {
		animation: showup 5s infinite 1.2s;
	}

	p:nth-child(7) {
		animation: showup 5s infinite 1.4s;
	}

	p:nth-child(8) {
		animation: showup 5s infinite 1.6s;
	}

	p:nth-child(9) {
		animation: showup 5s infinite 1.8s;
	}

	@keyframes showup {
		0% {
			font-size: 0px;
			transform: rotate(90deg);
		}
		5% {
			font-size: 60px;
		}
		10% {
			font-size: 66px;
			transform: rotate(0deg);
		}
		60% {
			font-size: 66px;
			opacity: 1;
		}
		71% {
			opacity: 0;
		}
		100% {
			opacity: 0;
			font-size: 66px;
			transform: rotate(0deg);
		}
	}
	@keyframes heart {
		0% {
			opacity: 0;
		}
		30% {
			left: 50vw;
			top: 35vh;
			opacity: 0;
			font-size: 42px;
		}
		40% {
			left: 50vw;
			top: 35vh;
			opacity: 1;
			font-size: 42px;
		}
		70% {
			left: 50vw;
			top: 35vh;
			opacity: 1;
			font-size: 42px;
		}
		80% {
			left: 50vw;
			top: 30vh;
			opacity: 0;
			font-size: 30px;
		}
		100% {
			opacity: 0;
		}
	}
</style>

<div class="text">
	<p> T </p>
	<p> H </p>
	<p> A </p>
	<p> N </p>
	<p> K </p>
	<p> &nbsp; </p>
	<p> Y </p>
	<p> 0 </p>
	<p> U </p>
</div>
