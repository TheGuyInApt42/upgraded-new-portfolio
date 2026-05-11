<script>
	import Icon from './Icon.svelte';

	/** @type {import('$lib/config/siteConfig.js').SiteConfig} */
	export let config;

	$: telHref = `tel:${config.phone.replace(/\D/g, '')}`;
</script>

<section id="contact" class="cta-section">
	<!-- Subtle texture overlay -->
	<div class="texture" aria-hidden="true"></div>

	<div class="section-container">
		<div class="cta-inner">
			<!-- Headline block -->
			<div class="cta-text">
				<span class="eyebrow">Get Started Today</span>
				<h2 class="cta-headline">{config.ctaHeadline}</h2>
				<p class="cta-body">{config.ctaBody}</p>
			</div>

			<!-- Action block -->
			<div class="cta-actions">
				<!-- Primary: Phone -->
				<a href={telHref} class="cta-phone">
					<div class="phone-icon">
						<Icon name="Phone" size={24} />
					</div>
					<div class="phone-text">
						<span class="phone-label">Call or Text Us</span>
						<span class="phone-number">{config.phone}</span>
					</div>
				</a>

				<div class="cta-divider">
					<span>or</span>
				</div>

				<!-- Secondary: Estimate form (you can wire this to a real form/Calendly/etc.) -->
				<a href="/contact" class="cta-estimate-btn">
					<Icon name="ClipboardList" size={18} />
					Request Free Estimate
				</a>

				<!-- Trust reassurance line -->
				<p class="cta-reassurance">
					<Icon name="Lock" size={13} strokeWidth={2} />
					No commitment required · We'll respond within 24 hours
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.cta-section {
		position: relative;
		background: var(--accent-dark);
		padding: 6rem 0;
		overflow: hidden;
	}

	/* Diagonal geometric accent */
	.texture {
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(
			-55deg,
			rgba(255, 255, 255, 0.015) 0px,
			rgba(255, 255, 255, 0.015) 1px,
			transparent 1px,
			transparent 40px
		);
	}
	.cta-section::before {
		content: '';
		position: absolute;
		top: -80px;
		right: -80px;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(90, 148, 112, 0.2) 0%, transparent 70%);
		pointer-events: none;
	}

	.section-container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
		position: relative;
	}

	.cta-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	/* Text */
	.cta-text {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.eyebrow {
		font-family: 'Barlow', sans-serif;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--accent-light);
	}

	.cta-headline {
		font-family: 'Barlow Condensed', sans-serif;
		font-weight: 800;
		font-size: clamp(2rem, 4vw, 3.2rem);
		text-transform: uppercase;
		letter-spacing: -0.01em;
		color: #fff;
		margin: 0;
		line-height: 1.05;
	}

	.cta-body {
		font-family: 'Barlow', sans-serif;
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.65);
		line-height: 1.7;
		margin: 0;
		max-width: 420px;
	}

	/* Actions */
	.cta-actions {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	}

	/* Phone CTA — the money button */
	.cta-phone {
		display: flex;
		align-items: center;
		gap: 1rem;
		text-decoration: none;
		background: var(--cta);
		padding: 1.25rem 1.75rem;
		border-radius: 8px;
		width: 100%;
		transition:
			background 0.2s,
			transform 0.2s,
			box-shadow 0.2s;
		box-shadow: 0 4px 24px rgba(196, 98, 26, 0.4);
	}
	.cta-phone:hover {
		background: var(--cta-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 36px rgba(196, 98, 26, 0.55);
	}

	.phone-icon {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.15);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		flex-shrink: 0;
	}

	.phone-text {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}
	.phone-label {
		font-family: 'Barlow', sans-serif;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.75);
	}
	.phone-number {
		font-family: 'Barlow Condensed', sans-serif;
		font-weight: 800;
		font-size: 1.6rem;
		letter-spacing: 0.02em;
		color: #fff;
		line-height: 1;
	}

	/* Divider */
	.cta-divider {
		display: flex;
		align-items: center;
		width: 100%;
		gap: 0.75rem;
		color: rgba(255, 255, 255, 0.3);
	}
	.cta-divider::before,
	.cta-divider::after {
		content: '';
		flex: 1;
		height: 1px;
		background: rgba(255, 255, 255, 0.15);
	}
	.cta-divider span {
		font-family: 'Barlow', sans-serif;
		font-size: 0.8rem;
		font-weight: 500;
	}

	/* Estimate button */
	.cta-estimate-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		justify-content: center;
		width: 100%;
		font-family: 'Barlow Condensed', sans-serif;
		font-weight: 700;
		font-size: 1rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		text-decoration: none;
		color: #fff;
		border: 1.5px solid rgba(255, 255, 255, 0.35);
		padding: 1rem 1.5rem;
		border-radius: 8px;
		transition:
			background 0.2s,
			border-color 0.2s,
			transform 0.15s;
	}
	.cta-estimate-btn:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.6);
		transform: translateY(-1px);
	}

	/* Reassurance */
	.cta-reassurance {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-family: 'Barlow', sans-serif;
		font-size: 0.78rem;
		color: rgba(255, 255, 255, 0.4);
		margin: 0;
		padding-left: 0.15rem;
	}
	.cta-reassurance :global(svg) {
		flex-shrink: 0;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.cta-inner {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.cta-actions {
			width: 100%;
		}
	}
</style>
