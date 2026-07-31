import { Container } from '../../../components/common/container/container'
import { SectionTitle } from '../../../components/common/sectionTitle/sectionTitle'
import { services } from '../../../data/services'
import styles from './serviceSection.module.css'

export function ServicesSection() {
  return (
    <section
      id="hizmetlerimiz"
      className={styles.servicesSection}
     >
      <Container>
        <SectionTitle
          title="Hizmetlerimiz"
          description="İş makineleri yedek parça ihtiyaçlarında kaliteli ürün, hızlı teslimat ve güvenilir destek sunuyoruz."
        />

        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article
              key={service.id}
              className={`${styles.serviceCard} ${
                service.highlighted ? styles.highlighted : ''
              }`}
            >
              <div
                className={styles.iconWrapper}
                aria-hidden="true"
              >
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}