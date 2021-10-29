// create services object for get object from services details.
const services = [
    {
      id: 1,
      name: "blood analysis",
      cost: 6.99,
      desc: "blood analysis, laboratory examination of a sample of blood used to obtain information about its physical and chemical properties. Blood analysis is commonly carried out on a sample of blood drawn from the vein of the arm, the finger, or the earlobe; in some cases, the blood cells of the bone marrow may also be examined. Hundreds of hematological tests and procedures have been developed, and many can be carried out simultaneously on one sample of blood with such instruments as autoanalyzers.",
      img: "https://cdn.britannica.com/w:400,h:300,c:crop/04/114504-050-3191864D/Blood-analysis-blood-sample-properties-diagnosis-disease.jpg"
    },
    {
      id: 2,
      name: "Liver function test",
      cost: 9.99,
      desc: "Liver function test, any laboratory procedure that measures and assesses various aspects of liver function.Because of the diversity of liver function and the varied and complicated metabolic processes that may be affected by disease states, more than 100 tests have been devised to test liver function. These reactions bear upon the metabolism of proteins, fats, carbohydrates, bile, and the detoxification and clearance of drugs and toxic chemicals performed by the liver. Since most of the substances metabolized by the liver enter the systemic circulation, the selective determination of the concentration of some of them in the blood usually gives valuable diagnostic information about a patient’s liver. Urinary values are sometimes also obtained to corroborate blood-serum findings. In clinical practice, some of the more important blood-serum substances are ammonia, urea, amino acids, proteins, free and esterified cholesterol, bilirubin, and various enzymes (notably, cholinesterase, ceruloplasmin, the transaminases, and alkaline phosphatase). In assessing liver metabolism of sugars, tolerance tests are helpful (see glucose tolerance test).",
      img: "https://blog.houseofdiagnostics.com/wp-content/uploads/2020/01/LFT.jpg"
    },
    {
      id: 3,
      name: "Pregnancy test",
      cost: 10.99,
      desc: "Pregnancy test, procedure aimed at determining whether a woman is pregnant. Pregnancy tests are based on a detectable increase in human chorionic gonadotropin (HCG) in the blood serum and urine during early pregnancy. HCG is the principal hormone produced by the chorionic layers of the placenta, the temporary organ that provides nourishment for the developing fetus. Levels of HCG increase significantly following implantation of the fertilized egg in the uterine wall, which occurs sometime between 6 and 12 days after fertilization.In home pregnancy tests, which are qualitative (determining whether HCG is present), a small amount of urine is applied to a chemical strip. The result is usually indicated by some visible change in the strip (whether this is a change in colour or the appearance of a symbol depends upon the way in which the test is manufactured). A positive home pregnancy test should be confirmed with a laboratory test and pelvic examination by a doctor. Pregnancy tests performed in a laboratory on a sample of blood or urine are quantitative and therefore are more accurate than a home pregnancy test. Laboratory tests using a sample of blood also have a high degree of sensitivity and can be used to detect increased levels of HCG early in the implantation process.",
      img: "https://cdn.britannica.com/w:400,h:300,c:crop/52/141452-050-65B0B1CE/Home-pregnancy-test-device.jpg"
    },
    {
      id: 4,
      name: "Brain scanning",
      cost: 8.99,
      desc: "Brain scanning, any of a number of diagnostic methods for detecting intracranial abnormalities.The oldest of the brain-scanning procedures still in use is a simple, relatively noninvasive procedure called isotope scanning. It is based on the tendency of certain radioactive isotopes to concentrate selectively in tumours and blood vessel lesions. The procedure involves the injection of a radioactive isotope (such as technetium-99m or iodine-131) into a blood vessel that supplies the cranial region. As the substance becomes localized within the brain, it decays, therewith emitting gamma rays. The concentration of rays at a given site, as measured by a movable radiation detection device, can reveal the presence, the shape, and often the size of the intracranial abnormality. In many cases, isotope scanning has been replaced by computerized axial tomography (CAT), or computed tomography (CT).The CAT scan is a procedure in which the brain is X-rayed from many different angles. An X-ray source delivers a series of short pulses of radiation as it and an electronic detector are rotated around the head of the individual being tested. The responses of the detector are fed to a computer that analyzes and integrates the X-ray data from the numerous scans to construct a detailed cross-sectional image of the brain. A series of such images enables physicians to locate brain tumours, cerebral abscesses, blood clots, and other disorders that would be difficult to detect with conventional X-ray techniques.",
      img: "https://cdn.britannica.com/w:400,h:300,c:crop/38/124238-004-64472C43/Imaging-technologies-brain-areas-positron-emission-tomography.jpg"
    },
    {
      id: 5,
      name: "Ultrasonography",
      cost: 19.99,
      desc: "ultrasound, also called ultrasonography, in medicine, the use of high-frequency sound (ultrasonic) waves to produce images of structures within the human body. Ultrasonic waves are sound waves that are above the range of sound audible to humans. The ultrasonic waves are produced by the electrical stimulation of a piezoelectric crystal and can be aimed at a specific area of the body. As the waves travel through bodily tissues, they are reflected back at any point where there is a change in tissue density, as, for instance, in the border between two different organs of the body. The reflected echoes are received by an electronic apparatus that determines the intensity level of the echoes and the position of the tissue giving rise to the echoes. The images thus formed can be displayed in static form, or, through the use of rapid multiple sound scans, they can in effect provide a moving picture of the inside of the body.",
      img: "http://fertilitycentrenepal.com/wp-content/uploads/2016/06/Ultrasound1.jpg"
    },
    {
      id: 6,
      name: "Skin test",
      cost: 3.99,
      desc: "Skin test, introduction of a specific test substance into the skin of an individual, either by injection or by scratching the skin, to determine that individual’s possible allergy to certain substances or his susceptibility or immunity to certain diseases. A skin test is usually considered positive when the skin becomes red and swollen at the site of contact with the test material and is considered negative when there is no skin reaction. See also tuberculin test.",
      img: "https://cdn.britannica.com/w:400,h:300,c:crop/98/144398-050-886763C4/reactions-skin-test-back-patient.jpg"
    }
]
  
export default services;