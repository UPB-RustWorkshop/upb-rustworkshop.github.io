---
sidebar_position: 2
---

# RustyBox

## History

Hello everyone! In this tutorial, we will help you write your own [BusyBox](https://en.wikipedia.org/wiki/BusyBox), but in Rust!

Before we begin, what is a BusyBox? What is it used for? For a computer to be usable, you need a way to communicate with it. In the early days of computing, punch cards containing the binary code to execute were used. This method was extremely laborious. Look at how much cardboard was needed to write the [program](https://cdn.neowin.com/news/images/uploaded/2020/06/1591712866_margaret.jpg) for the Apollo 11 mission.

Around the 70s, with the development of computing and computers, a new interface emerged: the command-line interface. Instead of punching cards, a keyboard was used to type commands that were interpreted by the computer. Thus, writing programs became much easier, especially with the development of compilers.

In the mid-80s, when graphics cards had become sufficiently popular, the graphical user interface appeared. It gradually replaced the command-line interface until it became the primary way to interact with a computer.

## Motivation

Now that we have an overview of the history of different interfaces, let's move on to our main topic: BusyBox. BusyBox is a program that exposes a command-line interface for essential commands, all in a single binary. Why a command-line interface, when the graphical interface is more widespread today? There are several reasons:

1. Although the graphical interface may seem easier to use, a command-line interface is very often simpler.
2. Being simpler, the command-line interface requires fewer resources, and therefore it can be used in environments with limited memory or computing power, such as embedded systems (routers, medical devices, etc.) or ultra-lightweight Docker containers (Alpine Linux).
3. Once the command-line interface is mastered, it offers more powerful control over the computing system.

Why use a BusyBox when you have [coreutils](https://en.wikipedia.org/wiki/GNU_Core_Utilities)? Packaging multiple commands into a single statically linked binary reduces storage and memory usage. Thus, BusyBox is often used in routers or industrial devices.

## Getting Started

To get started with this tutorial, make sure you:

1. Know a bit of the Rust language. You just need to know its syntax and the basic Cargo commands. We will help you with the various APIs.
2. Have a POSIX machine. Although in theory most commands could work on Windows, a BusyBox is designed to run on a Unix system. WSL, a Linux virtual machine, or a POSIX operating system (Linux, BSD, MacOS) should do the trick.
3. Know how to use a command-line interface. Again, you just need to know how to type a command and interpret its output, nothing special.
4. Have a bit of motivation. :)

## Steps

### Project Creation

We offer two approaches:

1. For the independent ones: you start from scratch. You type `cargo init rustybox` and organize the code as you see fit.
2. For those who prefer guidance: you start with the provided
   [skeleton](https://github.com/Ioan-Cristian/rustybox).

### Workflow

We suggest the following workflow:

1. Start by defining the commands you want to implement.
2. Write a parser for the commands and their arguments.
3. Test.
4. Implement a command. Start with the simplest one.
5. Test each command separately.
6. Return to step 4 if there are commands left to implement.
7. Once all commands are implemented, test again. And then test again. In your life as a programmer, you will spend much more time testing your code than writing it. :)
8. And that's it! Now you can get rid of old commands like `cp` or `ls` and use your own RustyBox! :)

### Command List

Not sure which commands to implement? We provide a short list for inspiration.

1. cat
  - Description: displays the files given as arguments.
  - Categories: io
  - Difficulty: easy
  - Tips:
    + `std::io::Lines` to iterate through a file line by line.

2. chmod
  - Description: changes the permissions of a file. Permissions can be given either in numeric form (644) or as a short string. The string can be of the ugrw type (user and group have read/write permission for the file), or of the -ax type (everyone gets execute permission for the file).
  - Categories: fs
  - Difficulty: hard
  - Tips:
    + the chmod man page (`man chmod`) if you are not familiar with POSIX permissions.
    + `u32::from_str_radix()` to parse a number from a string.
    + `std::fs::Metadata` to retrieve and change a file's metadata.

3. chown
  - Description: changes the owners of the files given as arguments. The owners are given as a string of the form `user:group`. If you only want to change the user, write user. If you only want to change the group, write `:group`. Both `user` and `group` can be a string or a number.
  - Categories: fs
  - Difficulty: hard
  - Tips:
    + the `/etc/passwd` and `/etc/group` files to map a user/group name to its ID.
    + `u32::from_str_radix()` to parse a number from a string.
    + `std::os::unix::fs::chown()` to change the owners.

4. cp
  - Description: copies the source to the destination. If the `-r/--recursive` option is used, then the contents of a directory are copied recursively.
  - Categories: fs
  - Difficulty: very hard
  - Tips:
    + `std::path::Path::join()` to create the source/destination path in the case of a recursive copy.
    + Try writing a function that takes the source path to copy, the destination, and the recursion option as parameters, and try to call it recursively.

5. date
  - Description: displays the local date and time. If the `-u/--utc` option is given, then the command displays the universal date and time.
  - Categories: time
  - Difficulty: easy
  - Tips:
    + the `chrono` crate with `chrono::Local` and `chrono::Utc`.
    + For formatting, we recommend `chrono::DateTime::format()`.

6. echo
  - Description: prints each given argument on a line. If the `-n/--no-newline` option is given, then the arguments are printed on the same line.
  - Categories: io
  - Difficulty: easy
  - Tips:
    + a for loop to iterate through the list of arguments.
    + `std::print!()` for printing.

7. env
  - Description: displays the environment variables in the form `VARIABLE=VALUE`.
  - Categories: proc
  - Difficulty: easy
  - Tips:
    + `std::env::vars()` to get the list of environment variables.

8. grep
  - Description: searches for a pattern in the given files. The pattern is a regex. For each line that contains the pattern, it is printed to standard output.
  - Categories: io
  - Difficulty: medium
  - Tips:
    + The `regex` crate. The `regex::Regex::is_match()` method might be of interest to you.
    + `std::io::Lines` to iterate through a file line by line.

9. head
  - Description: prints at most N (10 by default) lines of each given file. The `-n/--number-of-lines` option is used to specify the number of lines.
  - Categories: io
  - Difficulty: simple
  - Tips:
    + `std::io::Lines` to iterate through a file line by line.
    + `std::io::Take` to limit an iterator.

10. ln
  - Description: creates a link (hard link by default). The `-s/--symbolic` option is used to create a symbolic link instead of a hard link.
  - Categories: fs
  - Difficulty: simple
  - Tips:
    + `std::os::unix::fs::symlink()` to create a symbolic link.
    + `std::fs::hard_link()` to create a hard link.

11. ls
  - Description: lists the contents of a directory or the details of a file. The program accepts the following options:
    + `-r/--recursive`: lists the contents of a directory recursively
    + `-a/--all`: shows hidden entries (starting with `.`)
    + `-l`: shows details like type (file, directory, link), permissions, owners, etc.
  - Categories: fs
  - Difficulty: very hard
  - Tips:
    + `std::fs::Metadata` to inspect a file's details.
    + `std::fs::read_dir()` to iterate through the contents of a directory.

12. mkdir
  - Description: creates the given directories.
  - Categories: fs
  - Difficulty: easy
  - Tips:
    + `std::fs::create_dir()` to create a directory.

13. mv
  - Description: moves the source to the destination.
  - Categories: fs
  - Difficulty: easy
  - Tips:
    + `std::fs::rename()` to move a path to another.

14. pwd
  - Description: prints the current working directory.
  - Categories: proc
  - Difficulty: easy
  - Tips:
    + `std::env::current_dir()` to get the working directory path.

15. rm
  - Description: removes file objects. The following options are accepted:
    + `-d/--dir`: ensures the file objects are empty directories.
    + `-r/--recursive`: removes a directory recursively.
  - Categories: fs
  - Difficulty: medium
  - Tips:
    + `std::fs::remove_file()` to remove a file.
    + `std::fs::remove_dir()` to remove an empty directory.
    + `std::fs::remove_dir_all()` to remove a non-empty directory.

16. rmdir
  - Description: removes empty directories.
  - Categories: fs
  - Difficulty: easy
  - Tips:
    + `std::fs::remove_dir()` to remove an empty directory.

17. sleep
  - Description: blocks the terminal for the specified duration. The duration is specified in the following way:
    + `-s/--seconds SECONDS`
    + `-m/--milliseconds MILLISECONDS`
  - Categories: time, thread
  - Difficulty: medium
  - Tips:
    + `std::thread::sleep` to block a thread.

18. stat
  - Description: displays the metadata of the given files (type, permissions, owners, timestamps, size).
  - Categories: fs
  - Difficulty: medium
  - Tips:
    + `chrono::DateTime::format()` to format a date and time.
    + `std::fs::Metadata` to inspect a file's metadata.

19. tail
  - Description: prints the last N lines of the given files (10 by default). The `-n/--number-of-lines` option is used to specify the number of lines.
  - Categories: io
  - Difficulty: medium
  - Tips:
    + `std::io::Lines` to iterate through a file line by line.
    + `std::iter::Rev` for a reversed iterator.

20. time
  - Description: measures the total execution time of a command.
  - Categories: proc
  - Difficulty: medium
  - Tips:
    + `std::process::Command` to execute a new command.
    + `std::time::Instant::elapsed()` to measure the duration from a point in time.

21. touch
  - Description: updates a file's timestamps and possibly creates it. The following options are accepted:
    - `-a/--access` to update the last access time.
    - `-m/--modify` to update the last modification time.
    - `-c/--no-create` to not create the file if it does not exist.
  - Categories: fs
  - Difficulty: medium
  - Tips:
    + the `filetime` crate with the methods `set_file_atime()` and `set_file_mtime()`.
    + `std::fs::File::create()` to create a file.

22. wc
  - Description: counts the number of characters, words, and lines for each given file. At the end, the total is displayed. The following options are accepted:
    + `-c/--bytes` to count bytes.
    + `-w/--words` to count words.
    + `-l/--lines` to count lines.
  - Categories: io
  - Difficulty: medium
  - Tips:
    + `std::io::Lines` to iterate through a file line by line.
    + `str::split()` to split a string using a delimiter.

## Need Help?

If you need help, don't hesitate to:

+ Consult the [official documentation](https://doc.rust-lang.org/std/)
+ Help each other. You are not in a class here. :)
+ And finally, ask us for help. After all, that's why we are here. :)
