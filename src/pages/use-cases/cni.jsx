import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import SEO from 'components/shared/seo';
import AWSLogo from 'icons/logo-aws.inline.svg';
import AzureLogo from 'icons/logo-azure.inline.svg';
import CiliumLogo from 'icons/logo-cilium.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';
import CNIImage1 from 'images/pages/usecase/cni-1.png';
import CNIImage2 from 'images/pages/usecase/cni-2.png';
import CNIImage3 from 'images/pages/usecase/cni-3.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'High Performance Cloud Native Networking (CNI)',
  category: 'Networking',
  tagline: 'Enhance the speed and efficiency of your Kubernetes and cloud native networks',
  subHeading: 'How can I have scalable and consistent networking across clouds?',
  description:
    'There are dozens of CNIs available for Kubernetes but, their features, scale, and performance vary greatly. Many of them rely on a legacy technology (iptables) that cannot handle the scale and churn of Kubernetes environments leading to increased latency and reduced throughput. Most CNIs also only offer support for L3/L4 Kubernetes network policy but little beyond. Many Cloud Provider have their own custom CNIs which results in operational complexity for customers operating in multi-cloud environments.',
  isImage: false,
  videoSrc: 'https://www.youtube.com/embed/ELyib78vjRY',
};

const sectionContent1 = {
  title: 'High Performance Cloud Native Networking CNI',
  description:
    'Cilium’s control and data plane has been built from the ground up for large-scale and highly dynamic cloud native environments where 100s and even 1000s of containers are created and destroyed within seconds. Cilium’s control plane is highly optimized, running in Kubernetes clusters with 1,000s of nodes and 100K pods. Cilium’s data plane uses eBPF for efficient load-balancing and incremental updates, avoiding the pitfalls of large iptables rulesets. ',
  imageSrc: CNIImage1,
  imageAlt: 'cilium cni illustration',
  whiteBackground: true,
};

const sectionContent2 = {
  title: 'Scalability',
  description:
    "Cilium is built to scale. Whether you're running a few nodes or managing a cluster with thousands, Cilium can handle it. Cilium’s eBPF-powered networking is optimized for large scale operations. This means you can grow your operations without worrying about the network becoming a bottleneck.",
  imageSrc: CNIImage2,
  imageAlt: 'cilium scalability illustration',
};

const sectionContent3 = {
  title: 'Network Security',
  description:
    "Cilium doesn't just excel in performance—it also brings robust security features. With identity-based security that goes beyond traditional IP address-based ACLs, Cilium provides fine-grained policy enforcement. This allows you to control who can talk to whom, reducing the attack surface and helping secure your cloud native applications.",
  imageSrc: CNIImage3,
  imageAlt: ' illustration',
  imageRight: false,
  whiteBackground: true,
};

const sectionContent4 = {
  title: 'Integration',
  description:
    'Cilium integrates seamlessly with Kubernetes, providing networking and security through a CNI plugin. Cilium has been tested, validated, and optimized across multiple clouds and Kubernetes distributions. All major cloud providers have already standardized on Cilium for cloud native networking and security needs with Kubernetes. Managed Kubernetes offerings from Google Cloud, AWS, Azure, Alibaba, DigitalOcean, and several smaller platforms like Civo, Linode, etc, leverage Cilium for their CNI.',
  videoSrc: 'https://www.youtube.com/embed/80OYrzS1dCA',
};

const testimonials = [
  {
    logo: AWSLogo,
    title: 'AWS picks Cilium for Networking & Security on EKS Anywhere',
    CTAtext: 'Read The Blog Post',
    url: 'https://isovalent.com/blog/post/2021-09-aws-eks-anywhere-chooses-cilium/',
    description:
      "AWS selected Cilium as the default networking and security solution for their EKS Anywhere platform, which manages on-premises Kubernetes clusters. Cilium's ability to integrate seamlessly with cloud-native and traditional technologies and its foundation in eBPF technology makes it an ideal choice. This decision aligns AWS with other major cloud providers and ensures a consistent user experience while enabling portability across different cloud environments.",
  },
  {
    title: 'Cilium in Anthos and Google Kubernetes Engine (GKE) as Dataplane V2',
    logo: GoogleLogo,
    CTAtext: 'Read The Blog Post',
    url: 'https://cilium.io/blog/2020/08/19/google-chooses-cilium-for-gke-networking/',
    description:
      "Cilium is a key component in Anthos and Google Kubernetes Engine (GKE) as Dataplane V2. It provides advanced networking, security, and performance capabilities. With Cilium's integration with eBPF technology, Anthos and GKE users benefit from dynamic security, high-performance networking, load balancing, encryption, and robust network security features. Cilium serves as the underlying solution for efficient communication and enhanced security in Kubernetes workloads on these platforms.",
  },
  {
    logo: AzureLogo,
    title: 'Azure CNI Powered by Cilium in Azure Kubernetes Service',
    url: 'https://isovalent.com/blog/post/azure-cni-cilium/',
    description:
      'Azure CNI Powered by Cilium combines the robust control plane of Azure CNI with the dataplane of Cilium to provide high-performance networking and security. Azure CNI Powered by Cilium is able to provide functionality equivalent to existing Azure CNI and Azure CNI Overlay plugins, offering faster service routing, more efficient network policy enforcement, better observability of cluster traffic, and support for larger clusters with increased numbers of nodes, pods, and services.',
    CTAtext: 'Read The Blog Post',
  },

  {
    logo: CiliumLogo,
    title: 'CNI Benchmark: Understanding Cilium Network Performance',
    url: 'https://cilium.io/blog/2021/05/11/cni-benchmark/',
    description:
      'This blog explores the performance characteristics of Cilium based on extensive benchmarks across throughput, eBPF host-routing, latency, flamegraphs, rate of new connections, and the cost of encryption.',
    CTAtext: 'Read The Blog Post',
  },
];

const CniPage = () => (
  <MainLayout>
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} className="pt-0 md:pt-0 lg:pt-0" />
    <FeatureSection {...sectionContent2} />
    <FeatureSection {...sectionContent3} />
    <FeatureSection {...sectionContent4} />
    <UseCaseCard
      heading="Who’s using Cilium for High Performance Cloud Native Networking(CNI)"
      testimonials={testimonials}
    />
    <JoinUsCard />
  </MainLayout>
);

export default CniPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.title,
    description: heroContent.tagline,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
