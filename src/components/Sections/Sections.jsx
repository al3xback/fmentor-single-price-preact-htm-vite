import { html } from 'htm/preact';

import styles from './Sections.module.css';

export default function Sections() {
	return html`<div class=${styles.sections}>
		<section
			class=${`${styles.section} ${styles['section-join-community']}`}
		>
			<h2 class=${styles.title}>Join our community</h2>
			<p class=${styles.subtitle}>
				30-day, hassle-free money back guarantee
			</p>
			<p class=${styles.desc}>
				Gain access to our full library of tutorials along with expert
				code reviews. Perfect for any developers who are serious about
				honing their skills.
			</p>
		</section>
		<div class=${styles.group}>
			<section
				class=${`${styles.section} ${styles['section-monthly-subsription']}`}
			>
				<h3 class=${styles.title}>Monthly Subscription</h3>
				<p class=${styles.price}>
					<span class=${styles.num}>$29</span>
					<span class=${styles.label}>per month</span>
				</p>
				<p class=${styles.desc}>
					Full access for less than $1 a day
				</p>
				<a href="#" class="btn btn--primary btn--full"> Sign Up </a>
			</section>
			<section
				class=${`${styles.section} ${styles['section-why-us']}`}
			>
				<h3 class=${styles.title}>Why Us</h3>
				<ul class=${styles.list}>
					<li>Tutorials by industry experts</li>
					<li>Peer ${String.fromCharCode(38)} expert code review</li>
					<li>Coding exercises</li>
					<li>Access to our GitHub repos</li>
					<li>Community forum</li>
					<li>Flashcard decks</li>
					<li>New videos every week</li>
				</ul>
			</section>
		</div>
	</div>`;
}
