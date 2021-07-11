-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2021 at 05:50 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appointment`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `communication_email` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullname` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street_no` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `date_of_birth` datetime(3) DEFAULT NULL,
  `facebook_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(12) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `state` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suburb` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `youtube_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_role` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `username`, `email`, `password`, `communication_email`, `fullname`, `phone_number`, `street_name`, `street_no`, `created_at`, `date_of_birth`, `facebook_url`, `gender`, `instagram_url`, `linkedin_url`, `pincode`, `state`, `suburb`, `updated_at`, `youtube_url`, `user_role`) VALUES
(1, 'a', 'a@a.com', '$2b$10$FOiSe.f7z4wZmgOx.YvDuOCORf4ome6iTl0qJHnES6Nc736EcQT4m', 'aaaa@gmail.com', 'aaa', '33', 'aaa', 'aa', '2021-07-09 08:48:44.790', NULL, NULL, NULL, NULL, NULL, 334344, 'aaa', 'aa', '2021-07-09 08:48:44.790', NULL, 'customer'),
(2, 'b', 'b@b.com', '$2b$10$SPxKJ69rffR6KRdDKzIVcOGWp9nFOcd8C2N3TOaPqKyX.BsVx3Ciy', NULL, NULL, NULL, NULL, NULL, '2021-07-09 11:30:12.749', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-09 11:30:13.199', NULL, 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('2c529786-eac4-4ba4-8e37-5fc2f1442d6d', 'e3c6fce1f2348c4fbd0ec56fc58f7f60192de03c1c2448ccca6d0de2739af5e9', '2021-07-09 08:42:38.890', '20210706032158_init', NULL, NULL, '2021-07-09 08:42:38.378', 1),
('391eace8-51b8-4e8d-b481-6d1c8562836d', '450fa4a575fa6801719a8aa072b60de98e89afe783008dacb9f8c7d8ffc438e2', '2021-07-09 08:42:40.077', '20210706034722_init', NULL, NULL, '2021-07-09 08:42:39.796', 1),
('5e8b18a6-6d12-4f17-ac51-78bf7b35ea76', '5a90320d79807aca7a206c1274d41f7538f7151e7d57d5e336c104a0e6e7eb2a', '2021-07-09 08:42:43.124', '20210709084241_init', NULL, NULL, '2021-07-09 08:42:42.077', 1),
('725ca4bc-b422-4524-9b31-2e9ce62202c3', '55e27d4818f3a578d89544655e840ec3ac7b138279881a858bc2ed02867d1efe', '2021-07-09 08:42:39.765', '20210706033244_init', NULL, NULL, '2021-07-09 08:42:38.921', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
