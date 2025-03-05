const argv = process.argv;
const env = process.env;
const pid = process.pid;
const ppid = process.ppid;
const platform = process.platform;
const version = process.version;
const versions = process.versions;
const arch = process.arch;
const cwd = process.cwd();
const memoryUsage = process.memoryUsage();
const uptime = process.uptime();

console.log(uptime);
