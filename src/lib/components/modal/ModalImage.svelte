<style>
	@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600&subset=latin-ext');
	* {
		box-sizing: border-box;
	}

	html,
	body {
		font-family: 'Raleway', sans-serif;
		font-size: 16px;
	}

	@media screen and (max-width: 768px) {
		html,
		body {
			font-size: 12px;
		}
	}
	.container {
		background-color: #9191e9;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
	}

	.button {
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 300;
		text-transform: uppercase;
		display: inline-block;
		border-radius: 1.5rem;
		background-color: #fff;
		color: #9191e9;
		padding: 1rem 2rem;
	}

	.popup {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		width: 100vw;
		height: 100vh;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 2;
		visibility: hidden;
		opacity: 0;
		overflow: hiden;
		transition: 0.64s ease-in-out;
	}
	.popup-inner {
		position: relative;
		bottom: -100vw;
		right: -100vh;
		display: flex;
		align-items: center;
		max-width: 800px;
		max-height: 600px;
		width: 60%;
		height: 80%;
		background-color: #fff;
		transform: rotate(32deg);
		transition: 0.64s ease-in-out;
	}
	.popup__photo {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		width: 40%;
		height: 100%;
		overflow: hidden;
	}
	.popup__photo img {
		width: auto;
		height: 100%;
	}
	.popup__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 60%;
		height: 100%;
		padding: 4rem;
	}
	.popup__text h1 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 2rem;
		text-transform: uppercase;
		color: #0a0a0a;
	}
	.popup__text p {
		font-size: 0.875rem;
		color: #686868;
		line-height: 1.5;
	}
	.popup:target {
		visibility: visible;
		opacity: 1;
	}
	.popup:target .popup-inner {
		bottom: 0;
		right: 0;
		transform: rotate(0);
	}
	.popup__close {
		position: absolute;
		right: -1rem;
		top: -1rem;
		width: 3rem;
		height: 3rem;
		font-size: 0.875rem;
		font-weight: 300;
		border-radius: 100%;
		background-color: #0a0a0a;
		z-index: 4;
		color: #fff;
		line-height: 3rem;
		text-align: center;
		cursor: pointer;
		text-decoration: none;
	}
</style>

<div class="popup-inner">
	<div class="popup__photo">
		<img
			src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?ixlib=rb-0.3.5&s=9980646201037d28700d826b1bd096c4&auto=format&fit=crop&w=700&q=80"
			alt=""
		/>
	</div>
	<div class="popup__text">
		<h1>Lorem ipsum dolor sit amet</h1>
		<p
			>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex velit, viverra non vulputate vitae,
			blandit vitae nisl. Nullam fermentum orci et erat viverra bibendum. Aliquam sed varius nibh, vitae mattis
			purus. Mauris elementum sapien non ullamcorper vulputate. Orci varius natoque penatibus et magnis dis
			parturient montes, nascetur ridiculus mus. Sed eget felis sit amet eros viverra pulvinar.</p
		>
	</div>
	<a class="popup__close" href="#">X</a>
</div>
