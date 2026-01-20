'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerName: string
  businessOverview: string
  industryVertical: string
  totalAnnualRevenue: string
  primaryChiplessRFIDFocusAreas: string
  ownershipType: string
  // Contact Details
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Professional Drivers (for Proposition 2)
  primaryMotivation: string
  keyPainPoints: string
  upcomingTriggers: string
  // Purchasing Behaviour Metrics (for Proposition 3)
  budgetOwnership: string
  procurementModel: string
  preferredEngagementType: string
  contractPreference: string
  // Solution Requirements (for Proposition 3)
  preferredSolutionType: string
  preferredDeploymentModel: string
  integrationRequirements: string
  performanceExpectations: string
  // CMI Insights (for Proposition 3)
  customerBenchmarking: string
  additionalComments: string
}

// Sample data for Chipless RFID Industry - Europe and Middle East Focus
const sampleCustomerData: CustomerData[] = [
  {
    customerName: 'Siemens AG',
    businessOverview: 'Global industrial conglomerate, Smart infrastructure solutions, Germany (HQ), Pan-European operations',
    industryVertical: 'Manufacturing, Logistics, Transportation',
    totalAnnualRevenue: '72,000',
    primaryChiplessRFIDFocusAreas: 'Tag Design, Reader, Printing and Manufacturing',
    ownershipType: 'Public',
    keyContactPerson: 'Hans Mueller',
    designation: 'VP - Digital Industries',
    emailAddress: 'h.mueller@siemens.com',
    phoneNumber: '+49 89 636 00',
    linkedInProfile: 'linkedin.com/in/hansmueller-siemens',
    websiteUrl: 'www.siemens.com',
    primaryMotivation: 'Operational cost efficiency, Industry 4.0 integration, supply chain visibility',
    keyPainPoints: 'Legacy system integration, rising infrastructure costs, cross-border compliance',
    upcomingTriggers: 'Smart factory expansion, EU Green Deal compliance, digital twin initiatives',
    budgetOwnership: 'Central corporate budget, technology division',
    procurementModel: 'In-house development, strategic partnerships',
    preferredEngagementType: 'Full stack solution partner',
    contractPreference: 'Multi-year framework agreement, revenue linked models',
    preferredSolutionType: 'End to end industrial tracking system, IoT integration platform',
    preferredDeploymentModel: 'Hybrid deployment, on premise for sensitive data',
    integrationRequirements: 'ERP systems (SAP), MES platforms, supply chain management systems',
    performanceExpectations: 'Real-time tracking, 99.9% read accuracy, EU regulatory compliance',
    customerBenchmarking: 'High potential - Industrial Leader',
    additionalComments: 'Strategic account for European manufacturing sector expansion'
  },
  {
    customerName: 'Emirates Group',
    businessOverview: 'Aviation and travel conglomerate, Dubai (HQ), Middle East & Global operations',
    industryVertical: 'Aerospace and Defense, Logistics, Transportation',
    totalAnnualRevenue: '35,600',
    primaryChiplessRFIDFocusAreas: 'Tag Design, Materials and Inks, Reader',
    ownershipType: 'Government',
    keyContactPerson: 'Ahmed Al Maktoum',
    designation: 'Director - Aviation Technology',
    emailAddress: 'a.almaktoum@emirates.com',
    phoneNumber: '+971 4 708 1111',
    linkedInProfile: 'linkedin.com/in/ahmedalmaktoum-emirates',
    websiteUrl: 'www.emirates.com',
    primaryMotivation: 'Baggage tracking efficiency, MRO optimization, passenger experience',
    keyPainPoints: 'High volume baggage handling, parts traceability, harsh environment durability',
    upcomingTriggers: 'Dubai Airport expansion, new fleet acquisition, sustainability mandates',
    budgetOwnership: 'Central corporate budget, CAPEX for infrastructure',
    procurementModel: 'Project-based procurement, long-term contracts',
    preferredEngagementType: 'Full stack solution partner',
    contractPreference: 'Multi-year agreement, performance-based pricing',
    preferredSolutionType: 'Aviation-grade tracking system, MRO management platform',
    preferredDeploymentModel: 'On premise with cloud backup',
    integrationRequirements: 'Baggage handling systems, aircraft maintenance systems, ERP',
    performanceExpectations: 'Extreme temperature tolerance, 100% read rate, real-time visibility',
    customerBenchmarking: 'High potential - Aviation Leader',
    additionalComments: 'Key account for Middle East aviation sector, Vision 2030 aligned'
  },
  {
    customerName: 'Carrefour SA',
    businessOverview: 'Multinational retail corporation, France (HQ), Europe & Middle East operations',
    industryVertical: 'Retail, Logistics',
    totalAnnualRevenue: '83,000',
    primaryChiplessRFIDFocusAreas: 'Tag Design, Printing and Manufacturing',
    ownershipType: 'Public',
    keyContactPerson: 'Marie Dubois',
    designation: 'Head of Supply Chain Innovation',
    emailAddress: 'm.dubois@carrefour.com',
    phoneNumber: '+33 1 64 50 10 00',
    linkedInProfile: 'linkedin.com/in/mariedubois-carrefour',
    websiteUrl: 'www.carrefour.com',
    primaryMotivation: 'Inventory accuracy, loss prevention, omnichannel fulfillment',
    keyPainPoints: 'Multi-format store complexity, fresh food tracking, shrinkage reduction',
    upcomingTriggers: 'Digital transformation initiative, Middle East expansion, sustainability goals',
    budgetOwnership: 'Regional operational budgets, central technology fund',
    procurementModel: 'Centralized procurement, regional deployment',
    preferredEngagementType: 'Infrastructure provider with managed services',
    contractPreference: 'Annual subscription, volume-based pricing',
    preferredSolutionType: 'Retail inventory management, cold chain monitoring',
    preferredDeploymentModel: 'Cloud-based with edge computing',
    integrationRequirements: 'POS systems, warehouse management, e-commerce platforms',
    performanceExpectations: 'Item-level tracking, 98% inventory accuracy, real-time stock visibility',
    customerBenchmarking: 'High potential - Retail Giant',
    additionalComments: 'Major opportunity across 3,000+ stores in Europe and Middle East'
  },
  {
    customerName: 'Saudi Aramco',
    businessOverview: 'State-owned petroleum company, Saudi Arabia (HQ), Middle East operations',
    industryVertical: 'Manufacturing, Logistics, Aerospace and Defense',
    totalAnnualRevenue: '535,000',
    primaryChiplessRFIDFocusAreas: 'Tag Design, Materials and Inks',
    ownershipType: 'Government',
    keyContactPerson: 'Khalid Al Rashid',
    designation: 'GM - Digital Transformation',
    emailAddress: 'k.alrashid@aramco.com',
    phoneNumber: '+966 13 880 0000',
    linkedInProfile: 'linkedin.com/in/khalidalrashid-aramco',
    websiteUrl: 'www.aramco.com',
    primaryMotivation: 'Asset tracking in harsh environments, safety compliance, operational efficiency',
    keyPainPoints: 'Extreme temperature and chemical exposure, vast asset base, regulatory compliance',
    upcomingTriggers: 'Vision 2030 digital initiatives, new facility construction, sustainability programs',
    budgetOwnership: 'Central corporate budget, project-specific CAPEX',
    procurementModel: 'Project-based procurement, strategic partnerships',
    preferredEngagementType: 'Full stack solution partner with local presence',
    contractPreference: 'Long-term framework agreement, milestone-based',
    preferredSolutionType: 'Industrial-grade asset tracking, HSE compliance system',
    preferredDeploymentModel: 'On premise, air-gapped for security',
    integrationRequirements: 'SAP ERP, asset management systems, HSE platforms',
    performanceExpectations: 'Hazardous area certification, extreme durability, real-time tracking',
    customerBenchmarking: 'High potential - Strategic Account',
    additionalComments: 'Largest potential account in Middle East, requires ATEX/IECEx certified solutions'
  },
  {
    customerName: 'Deutsche Post DHL Group',
    businessOverview: 'Global logistics company, Germany (HQ), Pan-European hub operations',
    industryVertical: 'Logistics, Transportation, Retail',
    totalAnnualRevenue: '94,000',
    primaryChiplessRFIDFocusAreas: 'Tag Design, Reader, Printing and Manufacturing',
    ownershipType: 'Public',
    keyContactPerson: 'Stefan Weber',
    designation: 'SVP - Innovation & Technology',
    emailAddress: 's.weber@dhl.com',
    phoneNumber: '+49 228 182 0',
    linkedInProfile: 'linkedin.com/in/stefanweber-dhl',
    websiteUrl: 'www.dhl.com',
    primaryMotivation: 'Parcel tracking accuracy, warehouse automation, sustainability',
    keyPainPoints: 'High volume processing, label damage, cross-border tracking gaps',
    upcomingTriggers: 'E-commerce growth, green logistics initiative, automation investments',
    budgetOwnership: 'Central technology budget, regional operational budgets',
    procurementModel: 'Centralized procurement, pilot-to-scale approach',
    preferredEngagementType: 'Technology partner with co-innovation',
    contractPreference: 'Multi-year agreement, usage-based pricing',
    preferredSolutionType: 'High-volume sorting integration, cross-border tracking',
    preferredDeploymentModel: 'Hybrid cloud with edge processing',
    integrationRequirements: 'Sorting systems, TMS, customer portals, customs systems',
    performanceExpectations: 'Sub-second read times, 99.99% accuracy, all-weather durability',
    customerBenchmarking: 'High potential - Logistics Leader',
    additionalComments: 'Critical partner for European logistics infrastructure'
  },
  {
    customerName: 'DP World',
    businessOverview: 'Global port operator, UAE (HQ), Middle East & Europe port operations',
    industryVertical: 'Logistics, Transportation',
    totalAnnualRevenue: '14,500',
    primaryChiplessRFIDFocusAreas: 'Tag Design, Materials and Inks, Reader',
    ownershipType: 'Government',
    keyContactPerson: 'Fatima Al Hassan',
    designation: 'Director - Smart Port Solutions',
    emailAddress: 'f.alhassan@dpworld.com',
    phoneNumber: '+971 4 881 5555',
    linkedInProfile: 'linkedin.com/in/fatimaalhassan-dpworld',
    websiteUrl: 'www.dpworld.com',
    primaryMotivation: 'Container tracking, yard management efficiency, customs integration',
    keyPainPoints: 'Harsh maritime environment, high-speed gate operations, multi-system integration',
    upcomingTriggers: 'Port expansion projects, Trade World initiative, blockchain integration',
    budgetOwnership: 'Central technology budget, port-level CAPEX',
    procurementModel: 'Project-based, phased deployment',
    preferredEngagementType: 'Infrastructure provider with managed services',
    contractPreference: 'Long-term contract, performance guarantees',
    preferredSolutionType: 'Maritime-grade tracking, yard management system',
    preferredDeploymentModel: 'On premise with cloud analytics',
    integrationRequirements: 'TOS systems, customs platforms, shipping line systems',
    performanceExpectations: 'Salt spray resistance, 100m+ read range, real-time visibility',
    customerBenchmarking: 'High potential - Port Operations',
    additionalComments: 'Key gateway for Middle East trade, expanding to European ports'
  },
  {
    customerName: 'Roche Holding AG',
    businessOverview: 'Swiss multinational healthcare company, Switzerland (HQ), European operations',
    industryVertical: 'Healthcare, Manufacturing',
    totalAnnualRevenue: '63,000',
    primaryChiplessRFIDFocusAreas: 'Tag Design, Materials and Inks, Printing and Manufacturing',
    ownershipType: 'Public',
    keyContactPerson: 'Anna Schneider',
    designation: 'Head of Supply Chain Digitalization',
    emailAddress: 'a.schneider@roche.com',
    phoneNumber: '+41 61 688 11 11',
    linkedInProfile: 'linkedin.com/in/annaschneider-roche',
    websiteUrl: 'www.roche.com',
    primaryMotivation: 'Drug traceability, cold chain integrity, regulatory compliance',
    keyPainPoints: 'Serialization requirements, temperature sensitivity, counterfeiting risks',
    upcomingTriggers: 'EU FMD compliance expansion, personalized medicine growth, sustainability targets',
    budgetOwnership: 'Central quality and compliance budget',
    procurementModel: 'Validated vendor qualification, long-term partnerships',
    preferredEngagementType: 'Specialized healthcare solution provider',
    contractPreference: 'Multi-year validated agreement',
    preferredSolutionType: 'Pharma-grade traceability, cold chain monitoring',
    preferredDeploymentModel: 'GxP validated cloud environment',
    integrationRequirements: 'SAP, serialization systems, cold chain monitoring, regulatory portals',
    performanceExpectations: 'FDA/EMA compliance, temperature logging, tamper evidence',
    customerBenchmarking: 'High potential - Pharma Leader',
    additionalComments: 'Stringent validation requirements, high-value opportunity'
  },
  {
    customerName: 'ADNOC Group',
    businessOverview: 'Abu Dhabi National Oil Company, UAE (HQ), Middle East operations',
    industryVertical: 'Manufacturing, Logistics, Aerospace and Defense',
    totalAnnualRevenue: '75,000',
    primaryChiplessRFIDFocusAreas: 'Tag Design, Materials and Inks',
    ownershipType: 'Government',
    keyContactPerson: 'Omar Al Zaabi',
    designation: 'VP - Digital & Technology',
    emailAddress: 'o.alzaabi@adnoc.ae',
    phoneNumber: '+971 2 602 0000',
    linkedInProfile: 'linkedin.com/in/omaralzaabi-adnoc',
    websiteUrl: 'www.adnoc.ae',
    primaryMotivation: 'Asset lifecycle management, safety tracking, operational efficiency',
    keyPainPoints: 'Harsh desert and marine environments, vast distributed assets, HSE compliance',
    upcomingTriggers: 'Capacity expansion, AI integration, net-zero initiatives',
    budgetOwnership: 'Central technology budget, business unit CAPEX',
    procurementModel: 'Framework agreements, strategic partnerships',
    preferredEngagementType: 'Full stack solution partner',
    contractPreference: 'Long-term agreement, milestone-based payments',
    preferredSolutionType: 'Industrial asset tracking, HSE compliance platform',
    preferredDeploymentModel: 'Secure on premise deployment',
    integrationRequirements: 'SAP S/4HANA, asset management, HSE systems',
    performanceExpectations: 'ATEX certification, extreme temperature tolerance, long battery life',
    customerBenchmarking: 'High potential - Energy Sector',
    additionalComments: 'Major UAE energy account, aligned with UAE Vision 2031'
  },
  {
    customerName: 'Inditex (Zara)',
    businessOverview: 'Fashion retail giant, Spain (HQ), Pan-European and Middle East retail operations',
    industryVertical: 'Retail, Logistics',
    totalAnnualRevenue: '32,600',
    primaryChiplessRFIDFocusAreas: 'Tag Design, Printing and Manufacturing',
    ownershipType: 'Public',
    keyContactPerson: 'Carlos Rodriguez',
    designation: 'Director - Retail Technology',
    emailAddress: 'c.rodriguez@inditex.com',
    phoneNumber: '+34 981 185 400',
    linkedInProfile: 'linkedin.com/in/carlosrodriguez-inditex',
    websiteUrl: 'www.inditex.com',
    primaryMotivation: 'Fast fashion inventory management, omnichannel fulfillment, loss prevention',
    keyPainPoints: 'Rapid inventory turnover, item-level accuracy, sustainable packaging',
    upcomingTriggers: 'Sustainability commitments, store digitalization, circular fashion initiatives',
    budgetOwnership: 'Central technology budget, brand-level budgets',
    procurementModel: 'Centralized procurement, global rollout',
    preferredEngagementType: 'Strategic technology partner',
    contractPreference: 'Volume-based pricing, multi-year commitment',
    preferredSolutionType: 'Fashion retail inventory system, source tagging solution',
    preferredDeploymentModel: 'Cloud-based with store edge devices',
    integrationRequirements: 'POS systems, e-commerce platform, warehouse systems',
    performanceExpectations: 'Recyclable/sustainable tags, 99%+ accuracy, fast checkout enablement',
    customerBenchmarking: 'High potential - Fashion Retail',
    additionalComments: 'Already using chip-based RFID, exploring chipless for sustainability'
  },
  {
    customerName: 'Etihad Rail',
    businessOverview: 'UAE national railway, UAE (HQ), GCC rail network operations',
    industryVertical: 'Transportation, Logistics',
    totalAnnualRevenue: '850',
    primaryChiplessRFIDFocusAreas: 'Tag Design, Materials and Inks, Reader',
    ownershipType: 'Government',
    keyContactPerson: 'Saeed Al Ketbi',
    designation: 'Chief Technology Officer',
    emailAddress: 's.alketbi@etihadrail.ae',
    phoneNumber: '+971 2 510 0000',
    linkedInProfile: 'linkedin.com/in/saeedalketbi-etihadrail',
    websiteUrl: 'www.etihadrail.ae',
    primaryMotivation: 'Rolling stock tracking, freight management, infrastructure monitoring',
    keyPainPoints: 'Extreme heat exposure, long-range requirements, maintenance scheduling',
    upcomingTriggers: 'Network expansion to Oman, freight volume growth, smart rail initiatives',
    budgetOwnership: 'Central project budget, operational technology fund',
    procurementModel: 'Project-based procurement, turnkey solutions',
    preferredEngagementType: 'Infrastructure provider with implementation support',
    contractPreference: 'Project-based with maintenance contract',
    preferredSolutionType: 'Rail asset tracking, freight monitoring system',
    preferredDeploymentModel: 'Trackside infrastructure with central management',
    integrationRequirements: 'Rail operations systems, freight management, maintenance systems',
    performanceExpectations: 'High-speed reading capability, extreme heat tolerance, long-range detection',
    customerBenchmarking: 'Medium potential - Emerging Rail',
    additionalComments: 'New rail network, greenfield opportunity for chipless RFID'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Preposition 1 Table - Customer Information + Contact Details
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Name/Company Name</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Scale of Operations, Role in RFID or Smart Identification Ecosystem, Geographic Presence)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Retail, Logistics, Transportation, Manufacturing, Aerospace and Defense, Healthcare, Government, Smart)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Total Annual Revenue</div>
              <div className="font-normal text-[10px] text-gray-600">(US$ Million)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Primary Chipless RFID Focus Areas</div>
              <div className="font-normal text-[10px] text-gray-600">(Tag Design, Materials and Inks, Printing and Manufacturing, Reader)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Ownership Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Public / Private / Partnership)</div>
            </th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryChiplessRFIDFocusAreas}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.ownershipType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 2 Table - Same as Preposition 1 + Professional Drivers
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Professional Drivers
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Name/Company Name</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Scale of Operations, Role in RFID or Smart Identification Ecosystem, Geographic Presence)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Retail, Logistics, Transportation, Manufacturing, Aerospace and Defense, Healthcare, Government, Smart)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Total Annual Revenue</div>
              <div className="font-normal text-[10px] text-gray-600">(US$ Million)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Primary Chipless RFID Focus Areas</div>
              <div className="font-normal text-[10px] text-gray-600">(Tag Design, Materials and Inks, Printing and Manufacturing, Reader)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Ownership Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Public / Private / Partnership)</div>
            </th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
            {/* Professional Drivers */}
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Primary Motivation for HFT Model System Investment</div>
              <div className="font-normal text-[10px] text-gray-600">(Latency advantage, alpha generation, liquidity provision, operational cost efficiency, regulatory resilience)</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Key Pain Points</div>
              <div className="font-normal text-[10px] text-gray-600">(Alpha decay, latency disadvantage, strategy saturation, rising infrastructure costs, regulatory and compliance risk)</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Upcoming Triggers and Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">(New exchange or venue onboarding, strategy refresh cycles, technology and infrastructure upgrades, regulatory developments, asset class or product)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryChiplessRFIDFocusAreas}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.ownershipType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryMotivation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyPainPoints}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 3 Table - Same as Preposition 1 + Purchasing Behaviour Metrics + Solution Requirements + CMI Insights
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={4} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={4} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Solution Requirements
            </th>
            <th colSpan={2} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Name/Company Name</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Scale of Operations, Role in RFID or Smart Identification Ecosystem, Geographic Presence)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Retail, Logistics, Transportation, Manufacturing, Aerospace and Defense, Healthcare, Government, Smart)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Total Annual Revenue</div>
              <div className="font-normal text-[10px] text-gray-600">(US$ Million)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Primary Chipless RFID Focus Areas</div>
              <div className="font-normal text-[10px] text-gray-600">(Tag Design, Materials and Inks, Printing and Manufacturing, Reader)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Ownership Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Public / Private / Partnership)</div>
            </th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
            {/* Purchasing Behaviour Metrics */}
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Budget Ownership</div>
              <div className="font-normal text-[10px] text-gray-600">(Trading desk, quantitative research, technology, central risk, corporate procurement)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Procurement Model</div>
              <div className="font-normal text-[10px] text-gray-600">(In-house development, third party vendor, platform, hybrid or modular sourcing)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Preferred Engagement Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Pure software vendor, infrastructure provider, full stack HFT solution partner)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Contract Preference</div>
              <div className="font-normal text-[10px] text-gray-600">(Perpetual license, annual subscription, usage based pricing, revenue linked models)</div>
            </th>
            {/* Solution Requirements */}
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Preferred Solution Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Strategy research and simulation platform, end to end HFT trading system, risk management and controls layer, latency and performance optimization tools)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Preferred Deployment Model</div>
              <div className="font-normal text-[10px] text-gray-600">(On premise colocation, exchange hosted environment, hybrid deployment)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Integration Requirements</div>
              <div className="font-normal text-[10px] text-gray-600">(Market data feeds, OMS or EMS, risk management systems, surveillance platforms, backtesting and simulation engines)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Performance Expectations</div>
              <div className="font-normal text-[10px] text-gray-600">(Latency benchmarks, fill ratio improvement, Sharpe ratio uplift, drawdown control, regulatory and audit readiness)</div>
            </th>
            {/* CMI Insights */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Additional Comments/Notes By CMI team</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryChiplessRFIDFocusAreas}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.ownershipType}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              {/* Purchasing Behaviour Metrics */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.budgetOwnership}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.procurementModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredEngagementType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.contractPreference}</td>
              {/* Solution Requirements */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredSolutionType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredDeploymentModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.integrationRequirements}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.performanceExpectations}</td>
              {/* CMI Insights */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarking}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Proposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Proposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Proposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
